webpackJsonp([0],{

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VirementPageModule", function() { return VirementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__virement__ = __webpack_require__(407);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VirementPageModule = (function () {
    function VirementPageModule() {
    }
    return VirementPageModule;
}());
VirementPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__virement__["a" /* VirementPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__virement__["a" /* VirementPage */]),
        ],
    })
], VirementPageModule);

//# sourceMappingURL=virement.module.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VirementPage = (function () {
    function VirementPage(navParam, navCtrl, service) {
        this.navParam = navParam;
        this.navCtrl = navCtrl;
        this.service = service;
        this.task = navParam.get('item');
    }
    return VirementPage;
}());
VirementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-virement',template:/*ion-inline-start:"/home/grecomilani/Desktop/ProjetinhoFoda/task manager/src/pages/virement/virement.html"*/'<ion-header>\n    <ion-navbar color=primary>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>{{task.task}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content style="background: #ccc;">\n    <div class="head-div">\n        <img src="assets/Calendar.png">\n        <p class="title">{{task.task}}</p>\n        <span class="titre">{{task.type_activity}}</span>\n        <p class="close" *ngIf="task.close===\'1\'" color="danger"><i class="badge">Close</i></p>\n        <ion-row>\n                <a ion-button round color=danger detail-push navPush="AddtaskPage" [navParams]=" {item:task}">Atualizar Ocorrência</a>\n        </ion-row>\n    </div>\n    <ion-card padding>\n            <ion-card-title>\n                    <h1>Informações</h1>\n            </ion-card-title>\n            <h3 style="color:#000"> <b>Detalhes</b> </h3>\n            <h4> {{task.detail}}</h4> <br>\n            <h3 style="color:#000"> <b>Atribuído Para</b> </h3>\n            <h4> {{task.assigned}}</h4> <br>\n            <h3 style="color:#000"> <b>Date</b> </h3>\n            <h4> {{task.date_expected}} at {{task.time}} (Duração: {{task.duration}})</h4> <br>\n            <h3 style="color:#000"> <b>Data</b> </h3>\n            <h4> {{task.real_close_date}}</h4> <br>\n            <h3 style="color:#000"> <b>Periodo</b> </h3>\n            <h4> {{task.period}}</h4> <br>\n            <h3 style="color:#000"> <b>Lembrete</b> </h3>\n            <h4> {{task.reminder}} min</h4> <br>\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"/home/grecomilani/Desktop/ProjetinhoFoda/task manager/src/pages/virement/virement.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_navigation_nav_params__["a" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */]])
], VirementPage);

//# sourceMappingURL=virement.js.map

/***/ })

});
//# sourceMappingURL=0.js.map