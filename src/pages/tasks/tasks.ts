import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { Service } from '../../providers/service';

/**
 * Generated class for the TasksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

user: any;
tasks=[];
order="order";
num_page=1;
search="";
type="";
close="";
created="";
assign="";
users:any;
shownGroup:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController, public view: ViewController,
     public loading: LoadingController, 
     public alert: AlertController, 
     public service: Service) {
    this.listeuser();
    
  }


  ionViewDidLoad() {
      this.liste(0);
  }

  ionViewDidEnter() {
    this.liste(0);
}

listesuivante(infiniteScroll){
  this.num_page= this.num_page+1;
  setTimeout(() => {
    this.tasks= this.service.listtasks();
  infiniteScroll.complete();
}, 500);

}

  liste(refresher){
    let loader = this.loading.create({
      content: "Carregando..." ,
    });
    loader.present();
    
    setTimeout(() => {
      loader.dismiss();
      this.num_page=1;
      this.tasks= this.service.listtasks();         
    }, 1000); 
   if(refresher != 0)
   refresher.complete();
  }

  deleteData(id){
    let confirmAlert = this.alert.create({
      title: "Aviso",
      message: "Você deseja remover essa ocorrência?",
      buttons: [
          {
              text: 'Não',
              handler: () => {
                  return;
              }
          },
          {
              text: 'Sim',
              handler: () => {
                let loader = this.loading.create({
                  content: "Carregando...",
                });
            
                loader.present();
                setTimeout(() => {
                  loader.dismiss();
                  this.num_page=1;
                  this.liste(0);        
                }, 1000);                 
              }
          }
      ]
  });
  confirmAlert.present();
  }

  closeData(id){
    let confirmAlert = this.alert.create({
      title: "Aviso",
      message: "Você deseja fechar essa ocorrência?",
      buttons: [
          {
              text: 'Não',
              handler: () => {
                  return;
              }
          },
          {
              text: 'Sim',
              handler: () => {
                let loader = this.loading.create({
                  content: "Carregando...",
                });
            
                loader.present();
                setTimeout(() => {
                  loader.dismiss();
                  this.num_page=1;
                  this.liste(0);        
                }, 1000); 
              }
          }
      ]
  });
  confirmAlert.present();
  }

  listeuser(){
    this.users= this.service.listuser();
  }

  toggleGroup = function(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
}

isGroupShown = function(group) {
    return this.shownGroup === group;
}

}
