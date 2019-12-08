import { EventosService } from './../service/eventos.service';
import { TaskI } from './../models/task.interface';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modal-evento',
  templateUrl: './modal-evento.page.html',
  styleUrls: ['./modal-evento.page.scss'],
})
export class ModalEventoPage implements OnInit {
  todo: TaskI = {
    titulo: '',
    descricao: '',
    url: '',
    data: ''
  }
  todoId = null;
  constructor(
    private modalCtrl:ModalController, private nav:NavController, private route:ActivatedRoute,   private enventoService:EventosService, private loadingController:LoadingController
  ) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if(this.todoId){
      this.loadTodo();
    }
  }
  async loadTodo(){
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    this.enventoService.getTodo(this.todoId).subscribe(res =>{
      loading.dismiss();
      this.todo = res;
    });
  }
  async saveTodo(){
    const loading = await this.loadingController.create({
      message: 'Salvando...'
    });
    await loading.present();
    if(this.todoId){
        this.enventoService.updateTodo(this.todo, todo.todoId).then(()=>{
          loading.dismiss();
          this.nav.navigateForward('/');
        });
    }else{
      this.enventoService.addTodo(this.todo).then(()=>{
        loading.dismiss();
        this.nav.navigateForward('/');
    });
  }
  }
  close(){
    this.modalCtrl.dismiss();
  }

}
