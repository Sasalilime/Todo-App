import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todo.interface';

//localhost:3000/todos
@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(id);
  }

  @Get()
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Post()
  createTodo(@Body() newTodo) {
    this.todoService.create(newTodo);
  }
}
