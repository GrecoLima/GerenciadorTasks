var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DealsMarketProvider } from '../../app/providers/deals-market/deals-market';
import { MyApp } from '../../app/app.component';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, app, dealsMarket, loading, alert, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.dealsMarket = dealsMarket;
        this.loading = loading;
        this.alert = alert;
        this.modalCtrl = modalCtrl;
        this.user_info = JSON.parse(localStorage.getItem("user_id"));
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    LoginPage.prototype.inscription = function () {
        var modal = this.modalCtrl.create('Inscription');
        modal.present();
    };
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        var cred = {
            username: this.username,
            password: this.password
        };
        this.dealsMarket.doAction('Login', 'login.php', cred).map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.result = data;
            console.log(_this.result);
            localStorage.setItem('user_id', JSON.stringify(_this.result[0]));
            _this.test = localStorage.getItem('user_id');
            console.log('LocalStorage: user_id ', _this.test);
            var loader = _this.loading.create({
                content: "checking, please wait...",
            });
            loader.present();
            setTimeout(function () {
                loader.dismiss();
                _this.app.initializeApp();
                _this.navCtrl.setRoot(HomePage);
            }, 2000);
        }, function (error) {
            var alert = _this.alert.create({
                title: "Warning",
                subTitle: "Email ou mot de passe errone, essayez encore!",
                buttons: ['OK']
            });
            alert.present();
        });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-login',
        templateUrl: 'login.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, MyApp,
        DealsMarketProvider, LoadingController, AlertController, ModalController])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map