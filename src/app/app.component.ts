import { Component } from '@angular/core';
import { ToDo } from './todo'

const INIT_TODO = [
  new ToDo("learn angular JS"),
  new ToDo("Push FT-2368")
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To Do List!';
  todoList:Array<ToDo>;

  constructor() {
    this.todoList = INIT_TODO;
  }

  deleteToDo(toDoIndex:number) {
    this.todoList.splice(toDoIndex, 1);
  }

  addToDo(task:string) {
    this.todoList.push(new ToDo(task));
  }

  doKey(event, task:string){
    //console.log(event)
    if (event.keyIdentifier == "Enter") {
      this.addToDo(task)
    }
  }
}
