import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { Service } from '../../providers/service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the ProfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
user: any;
usr:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public loading: LoadingController,
     public service: Service, public alert: AlertController) {
      this.usr= {firstname: "Milani", name: "Greco", email: "greco.lima.milani@ibm.com"};
  }
  save(){
      let loader = this.loading.create({
        content: "Carregando..." ,
      });
      loader.present();
      setTimeout(() => {
        loader.dismiss();
        this.service.toastmessage("Usuário Salvo!", "middle");          
        
      }, 1500);  
    }         

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPage');
  }
}
