import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'Book',
      done: false,
      description: 'finish to read my book',
    },
    {
      id: 2,
      title: 'Footing',
      done: false,
      description: 'do My footing',
    },
    {
      id: 3,
      title: 'Call',
      done: true,
      description: 'Call my friend',
    },
  ];

  findOne(id: string){
    return this.todos.find(todo => todo.id === Number(id));
  }

  findAll(): Todo[] {
    return this.todos;
  }

  create(todo: Todo) {
    this.todos = [...this.todos, todo];
  }
}
