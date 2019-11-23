import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { TabsServiceProvider } from '../../app/providers/tabs-service/tabs-service';
import { Service } from '../../providers/service';

/**
 * Generated class for the AddtaskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtask',
  templateUrl: 'addtask.html',
})
export class AddtaskPage {

  task: any;
  item:any;
  title="Nova Ocorrência";
  user: any;
  users=[];
  action="create";
  constructor(public navCtrl: NavController, public navParams: NavParams, public tabsService: TabsServiceProvider, public view: ViewController,
    public toastCtrl: ToastController,  
     public loading: LoadingController, 
     public alert: AlertController, 
     public service: Service) {

      this.item= navParams.get('item');

    if(!this.item){
      this.task={assigned_to:"", type:"", period:"",reminder:"", task:"", detail:"", date_expected:"", time:"", duration:"",id_user: 1};      
    }else{
      this.action="update";
      this.title=this.item.task;
      this.task={id: this.item.id, assigned_to:this.item.assigned_to, type:this.item.type_activity, period:this.item.period,reminder:this.item.reminder, task:this.item.task, detail:this.item.detail, date_expected:this.item.date_expected, time:this.item.time, duration:this.item.duration, id_user: 1};      
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtaskPage');
    this.listeuser();
  }

  newtask(){
 if(this.task.assigned_to==="" || this.task.type==="" || this.task.task==="" || this.task.time===""|| this.task.duration===""){
     this.service.toastmessage("Preencha todos os campos", "middle");
 }else{
          let loader = this.loading.create({
            content: "Carregando ..." ,
          });

          loader.present();
          setTimeout(() => {
            loader.dismiss();
            this.service.toastmessage("Sucesso", "middle");
            this.view.dismiss();     
          }, 1000); 
          
    
    }
  }


  listeuser(){
    this.users= this.service.listuser();
  }


}
