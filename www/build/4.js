webpackJsonp([4],{

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepassPageModule", function() { return ChangepassPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__changepass__ = __webpack_require__(403);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangepassPageModule = (function () {
    function ChangepassPageModule() {
    }
    return ChangepassPageModule;
}());
ChangepassPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__changepass__["a" /* ChangepassPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__changepass__["a" /* ChangepassPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__changepass__["a" /* ChangepassPage */]
        ]
    })
], ChangepassPageModule);

//# sourceMappingURL=changepass.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepassPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(102);
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
 * Generated class for the ChangepassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChangepassPage = (function () {
    function ChangepassPage(navCtrl, navParams, toastCtrl, loading, alert, modalCtrl, view, service, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.alert = alert;
        this.modalCtrl = modalCtrl;
        this.view = view;
        this.service = service;
        this.events = events;
        this.usr = { oldpass: "", newpass: "", confirmpass: "", id_user: 1 };
    }
    ChangepassPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    ChangepassPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.usr.oldpass !== "") {
            if (this.usr.newpass !== "") {
                if (this.usr.confirmpass !== "") {
                    if (this.usr.newpass !== this.usr.oldpass) {
                        if (this.usr.newpass === this.usr.confirmpass) {
                            if (this.usr.newpass.length >= 8) {
                                if (this.usr.newpass.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)) {
                                    var loader_1 = this.loading.create({
                                        content: "Carregando...",
                                    });
                                    loader_1.present();
                                    setTimeout(function () {
                                        loader_1.dismiss();
                                        _this.service.toastmessage("Alterado com sucesso!", "middle");
                                        _this.usr.oldpass = "";
                                        _this.usr.newpass = "";
                                        _this.usr.confirmpass = "";
                                    }, 1500);
                                }
                                else {
                                    this.service.toastmessage("Sua senha não combina com os critérios aceitáveis!", "middle");
                                }
                            }
                            else {
                                this.service.toastmessage("Sua senha deve ter mais do que 8 caracteres!", "middle");
                            }
                        }
                        else {
                            this.service.toastmessage("Sua senha deve ser igual!", "middle");
                        }
                    }
                    else {
                        this.service.toastmessage("A nova senha deve ser diferente da senha atual!", "middle");
                    }
                }
                else {
                    this.service.toastmessage("Please enter your confirm pass!", "middle");
                }
            }
            else {
                this.service.toastmessage("Please enter your new pass!", "middle");
            }
        }
        else {
            this.service.toastmessage("Por favor entre com sua senha antiga!", "middle");
        }
    };
    return ChangepassPage;
}());
ChangepassPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-changepass',template:/*ion-inline-start:"/home/grecomilani/Desktop/ProjetinhoFoda/task manager/src/pages/changepass/changepass.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color=primary>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Alterar Senha</ion-title>\n    </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n            <ion-list>\n                <form (submit)="onSubmit()">\n                    <ion-item>\n                        <ion-input name="usr.oldpass" [(ngModel)]="usr.oldpass" type="password" placeholder="Senha Antiga"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-input name="usr.newpass" [(ngModel)]="usr.newpass" type="password" placeholder="Nova Senha"></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-input name="usr.confirmpass" [(ngModel)]="usr.confirmpass" type="password" placeholder="Confirmar Senha"></ion-input>\n                    </ion-item>\n                    <br>\n                    <button ion-button block type="submit">\n						<ion-icon name=""></ion-icon>\n						&nbsp; Salva</button>\n                </form>\n            </ion-list>\n            <ion-row>\n                <ion-col>\n                        <h3>Intruções</h3>\n                            <ol>\n                                <li>Sua senha deve conter mais do que 8 caracteres</li>\n                                <li>Sua senha nova deve ser diferente da senha antiga</li>\n                                <li>Sua senha deve conter letras maísculas, minusculas e números</li>\n                                <li>Sua senha deve ser trocada a cada dois meses</li>\n                            </ol>\n                </ion-col>\n            </ion-row>\n</ion-content>'/*ion-inline-end:"/home/grecomilani/Desktop/ProjetinhoFoda/task manager/src/pages/changepass/changepass.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]) === "function" && _j || Object])
], ChangepassPage);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=changepass.js.map

/***/ })

});
//# sourceMappingURL=4.js.map