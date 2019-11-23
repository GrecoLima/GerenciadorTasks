import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, ViewController, LoadingController, Events, ToastController } from 'ionic-angular';
import { Service } from '../../providers/service';


/**
 * Generated class for the ChangepassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
   selector: 'page-changepass',
   templateUrl: 'changepass.html',
 })
 export class ChangepassPage {

   result: {};
   usr: any;
   user: any;

   constructor(
     public navCtrl: NavController, 
     public navParams: NavParams,
     public toastCtrl: ToastController,  
     public loading: LoadingController, 
     public alert: AlertController, 
     public modalCtrl: ModalController,
     public view: ViewController,
     public service: Service,
     public events: Events) {
        this.usr={oldpass: "", newpass:"", confirmpass: "", id_user: 1};
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad Login');
   }

   onSubmit(){

if(this.usr.oldpass!==""){
  if(this.usr.newpass!==""){
    if(this.usr.confirmpass!==""){
      if(this.usr.newpass!==this.usr.oldpass){
      if(this.usr.newpass===this.usr.confirmpass){
        if(this.usr.newpass.length>=8){
          if(this.usr.newpass.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)){
          
        let loader = this.loading.create({
            content: "Carregando..." ,
          });
           loader.present();

           setTimeout(() => {
            loader.dismiss();
            this.service.toastmessage("Alterado com sucesso!", "middle");
            this.usr.oldpass=""; this.usr.newpass=""; this.usr.confirmpass="";
          }, 1500);                 
        
        }else{
          this.service.toastmessage("Sua senha não combina com os critérios aceitáveis!", "middle");
        }
        }else{
          this.service.toastmessage("Sua senha deve ter mais do que 8 caracteres!", "middle");
        }
      }else{
        this.service.toastmessage("Sua senha deve ser igual!", "middle");
      }
    }else{
      this.service.toastmessage("A nova senha deve ser diferente da senha atual!", "middle");
    }
    }else{
      this.service.toastmessage("Please enter your confirm pass!", "middle");
    }
  }else{
    this.service.toastmessage("Please enter your new pass!", "middle");
  }
}else{
        this.service.toastmessage("Por favor entre com sua senha antiga!", "middle");
}
    
   }


 }
