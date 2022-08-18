import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localtem : string | null;
  todos : Todo[];

  constructor() {
    this.localtem = localStorage.getItem('todos');

    if(this.localtem === null){
      this.todos = []
    }else{
      this.todos = JSON.parse(this.localtem);
    }
    
   }

  ngOnInit(): void {
  }

  deleteTodo(todo : Todo){
    let indexofTodo = this.todos.indexOf(todo);
    this.todos.splice(indexofTodo, 1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

  markDone(todo: Todo){
    let indexOfTodo = this.todos.indexOf(todo);
    this.todos[indexOfTodo].active = !this.todos[indexOfTodo].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
