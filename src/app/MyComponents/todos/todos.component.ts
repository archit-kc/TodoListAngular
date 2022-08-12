import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos : Todo[];
  constructor() {
    this.todos = []
   }

  ngOnInit(): void {
  }

  deleteTodo(todo : Todo){
    let indexofTodo = this.todos.indexOf(todo);
    this.todos.splice(indexofTodo, 1);
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }

}
