webpackJsonp([2],{

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilPageModule", function() { return ProfilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profil__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilPageModule = (function () {
    function ProfilPageModule() {
    }
    return ProfilPageModule;
}());
ProfilPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__profil__["a" /* ProfilPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profil__["a" /* ProfilPage */]),
        ],
    })
], ProfilPageModule);

//# sourceMappingURL=profil.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_toast_toast_controller__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProfilPage = (function () {
    function ProfilPage(navCtrl, navParams, toastCtrl, loading, service, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.service = service;
        this.alert = alert;
        this.usr = { firstname: "Milani", name: "Greco", email: "greco.lima.milani@ibm.com" };
    }
    ProfilPage.prototype.save = function () {
        var _this = this;
        var loader = this.loading.create({
            content: "Carregando...",
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            _this.service.toastmessage("Usuário Salvo!", "middle");
        }, 1500);
    };
    ProfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilPage');
    };
    return ProfilPage;
}());
ProfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profil',template:/*ion-inline-start:"/home/grecomilani/Desktop/ProjetinhoFoda/task manager/src/pages/profil/profil.html"*/'<!--\n  Generated template for the ProfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color=primary>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Perfil</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item>\n            <ion-input name="user.nom" [(ngModel)]="usr.name" type="text" placeholder="Name">\n            </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input name="user.prenom" [(ngModel)]="usr.firstname" type="text" placeholder="Firstname">\n            </ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input name="user.email" ng-readonly="true" [(ngModel)]="usr.email" type="email" placeholder="Email"></ion-input>\n        </ion-item>\n        <button ion-button block (click)="save()">\n            <ion-icon name=""></ion-icon>\n            &nbsp; Salvar</button>\n        <br>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/home/grecomilani/Desktop/ProjetinhoFoda/task manager/src/pages/profil/profil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_toast_toast_controller__["a" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
], ProfilPage);

//# sourceMappingURL=profil.js.map

/***/ })

});
//# sourceMappingURL=2.js.map