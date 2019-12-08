import { EventosService } from './../service/eventos.service';
import { TaskI } from './../models/task.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {
  todos: TaskI[];

  constructor(private todoService: EventosService){}
  
  ngOnInit(){
    this.todoService.getTodos().subscribe((todos) =>{
      console.log('Todoss', todos);
      this.todos = todos;
    })
  }
  onRemove(idTask:string){
    this.todoService.removeTodo(idTask);
  }
}