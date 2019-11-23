webpackJsonp([3],{

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
        ]
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(104);
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
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, toastCtrl, loading, alert, modalCtrl, service, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.alert = alert;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.events = events;
        this.user = { email: "", password: "" };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    LoginPage.prototype.inscription = function () {
        var modal = this.modalCtrl.create('InscriptionPage');
        modal.present();
    };
    LoginPage.prototype.forgot = function () {
    };
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.user.email === "" || this.user.password === "") {
            var toast = this.toastCtrl.create({
                message: "Por favor preencha todos os campos!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        else {
            var loader_1 = this.loading.create({
                content: "Carregando...",
            });
            loader_1.present();
            setTimeout(function () {
                loader_1.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                _this.service.toastmessage("Você esta conectado", "top");
            }, 1500);
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/grecomilani/Desktop/ProjetinhoFoda/task manager/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n\n    <ion-row>\n        <ion-col>\n            <div style="margin-top: 100px; text-align: center; color: white">\n                <h1>Seja Bem Vindo</h1><br>\n            </div>\n\n            <ion-list>\n                <form (submit)="onSubmit()">\n                    <ion-item>\n                        <ion-input name="user.compte" [(ngModel)]="user.email" type="text" placeholder="Email">\n                        </ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-input name="user.code" [(ngModel)]="user.password" type="password" placeholder="Senha"></ion-input>\n                    </ion-item>\n                    <br>\n                    <button ion-button round block type="submit">\n						<ion-icon name="log-in"></ion-icon>\n						&nbsp; Log in</button>\n                    </form>\n\n            </ion-list>\n        </ion-col>\n    </ion-row>\n    <ul class="bg-bubbles">\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n        <li></li>\n    </ul>\n</ion-content>'/*ion-inline-end:"/home/grecomilani/Desktop/ProjetinhoFoda/task manager/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map