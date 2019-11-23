import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any;
  user:{};

  pages: Array<{title: string, component: any, icone: any}>

  constructor(platform: Platform, public alertCtrl: AlertController, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.user= JSON.parse(localStorage.getItem('todoin_user'));
    if(!this.user){
      this.rootPage = "LoginPage"
    }else{
      this.rootPage = HomePage;
    }

    this.pages = [
      { title: 'Dashboard', component: HomePage, icone: 'home' },
      { title: 'Tasks', component: "TasksPage", icone: 'list' },
      { title: 'Profile', component: "ProfilPage", icone: 'contact' },
      { title: 'Change Password', component: "ChangepassPage", icone: 'lock' },
    ];
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout(){
    let confirmAlert = this.alertCtrl.create({
        title: "Information",
        message: "Do you really want to exit the application ?",
        buttons: [
            {
                text: 'No',
                handler: () => {
                    return;
                }
            },
            {
                text: 'Yes',
                handler: () => {
                  localStorage.removeItem('todoin_user');
                  this.nav.setRoot("LoginPage");
                }
            }
        ]
    });
    confirmAlert.present();
  }
  
}
