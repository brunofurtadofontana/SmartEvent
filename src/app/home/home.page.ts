import { EventosService } from './../service/eventos.service';
import { TaskI } from './../models/task.interface';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todos: TaskI[];

  constructor(private todoService: EventosService){}
  
  ngOnInit(){
    this.todoService.getTodos().subscribe((todos) =>{
      console.log('Todoss', todos);
      this.todos = todos;
    })
  }
}
