import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, LoadingController, Events, ToastController } from 'ionic-angular';
import { Service } from '../../providers/service';
import { HomePage } from '../home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
 @IonicPage()
 @Component({
   selector: 'page-login',
   templateUrl: 'login.html',
 })
 export class LoginPage {

   username: String;
   password: String;
   result: {};
   test: any;
   user: any;

   constructor(
     public navCtrl: NavController, 
     public navParams: NavParams,
     public toastCtrl: ToastController,  
     public loading: LoadingController, 
     public alert: AlertController, 
     public modalCtrl: ModalController,
     public service: Service,
     public events: Events) {
     this.user = {email:"", password:""};
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad Login');
   }


   inscription(){
     let modal = this.modalCtrl.create('InscriptionPage');
     modal.present();
   }

   forgot(){

   }

  onSubmit(){
    if(this.user.email==="" || this.user.password===""){
        let toast = this.toastCtrl.create({
                          message: "Por favor preencha todos os campos!",
                          duration: 3000,
                          position: 'top'
                        });

                        toast.present();
    }else{
      let loader = this.loading.create({
        content: "Carregando..." ,
      });

      loader.present();
      setTimeout(() => {
      loader.dismiss();
      this.navCtrl.setRoot(HomePage);
      this.service.toastmessage("Você esta conectado", "top");
    }, 1500);
    }
 
    
   }


 }
