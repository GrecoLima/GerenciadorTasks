webpackJsonp([5],{

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcartePageModule", function() { return NewcartePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addtask__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewcartePageModule = (function () {
    function NewcartePageModule() {
    }
    return NewcartePageModule;
}());
NewcartePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__addtask__["a" /* AddtaskPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addtask__["a" /* AddtaskPage */]),
        ],
    })
], NewcartePageModule);

//# sourceMappingURL=addtask.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddtaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_providers_tabs_service_tabs_service__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service__ = __webpack_require__(102);
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
 * Generated class for the AddtaskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddtaskPage = (function () {
    function AddtaskPage(navCtrl, navParams, tabsService, view, toastCtrl, loading, alert, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabsService = tabsService;
        this.view = view;
        this.toastCtrl = toastCtrl;
        this.loading = loading;
        this.alert = alert;
        this.service = service;
        this.title = "New task";
        this.users = [];
        this.action = "create";
        this.item = navParams.get('item');
        if (!this.item) {
            this.task = { assigned_to: "", type: "", period: "", reminder: "", task: "", detail: "", date_expected: "", time: "", duration: "", id_user: 1 };
        }
        else {
            this.action = "update";
            this.title = this.item.task;
            this.task = { id: this.item.id, assigned_to: this.item.assigned_to, type: this.item.type_activity, period: this.item.period, reminder: this.item.reminder, task: this.item.task, detail: this.item.detail, date_expected: this.item.date_expected, time: this.item.time, duration: this.item.duration, id_user: 1 };
        }
    }
    AddtaskPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddtaskPage');
        this.listeuser();
    };
    AddtaskPage.prototype.newtask = function () {
        var _this = this;
        if (this.task.assigned_to === "" || this.task.type === "" || this.task.task === "" || this.task.time === "" || this.task.duration === "") {
            this.service.toastmessage("Please fill the form", "middle");
        }
        else {
            var loader_1 = this.loading.create({
                content: "Loading ...",
            });
            loader_1.present();
            setTimeout(function () {
                loader_1.dismiss();
                _this.service.toastmessage("Successful", "middle");
                _this.view.dismiss();
            }, 1000);
        }
    };
    AddtaskPage.prototype.listeuser = function () {
        this.users = this.service.listuser();
    };
    return AddtaskPage;
}());
AddtaskPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addtask',template:/*ion-inline-start:"/home/grecomilani/Desktop/ProjetinhoFoda/task manager/src/pages/addtask/addtask.html"*/'<!--\n  Generated template for the EffectuerVirementPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color=primary>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div style="text-align: center; margin-bottom: 20px;">\n        <img src="assets/logo_clock.png">\n    </div>\n    <ion-list>\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label>Type of task</ion-label>\n                    <ion-select [(ngModel)]="task.type" >\n                        <ion-option value="Call">Call</ion-option>\n                        <ion-option value="Meeting">Meeting</ion-option>\n                        <ion-option value="Task">Task</ion-option>\n                        <ion-option value="Deadline">Deadline</ion-option>\n                        <ion-option value="Email">Email</ion-option>\n                        <ion-option value="Lunch">Lunch</ion-option>\n                    </ion-select>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        \n        <ion-row>\n            <ion-col col-6>\n                <ion-item>\n                    <ion-label>Periodicity</ion-label>\n                    <ion-select [(ngModel)]="task.period" >\n                        <ion-option value="">No periodicity</ion-option>\n                        <ion-option value="Daily">Daily</ion-option>\n                        <ion-option value="Weekly">Weekly</ion-option>\n                        <ion-option value="Monthly">Monthly</ion-option>\n                        <ion-option value="Quarterly">Quarterly</ion-option>\n                        <ion-option value="Half-yearly">Half-yearly</ion-option>\n                        <ion-option value="Annual">Annual</ion-option>\n                    </ion-select>\n                </ion-item>\n            </ion-col>\n            <ion-col col-6>\n                <ion-item>\n                    <ion-label>Reminder</ion-label>\n                    <ion-select [(ngModel)]="task.reminder">\n                        <ion-option value="30">30 min</ion-option>\n                        <ion-option value="45">45 min</ion-option>\n                        <ion-option value="60">1 hour</ion-option>\n                        <ion-option value="120">2 hour</ion-option>\n                        <ion-option value="180">3 hour</ion-option>\n                    </ion-select>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label>Title:</ion-label>\n                    <ion-input type="text" [(ngModel)]="task.task"></ion-input>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col col-4>\n                <ion-item>\n                    <ion-label>Date:</ion-label>\n                    <ion-datetime [(ngModel)]="task.date_expected" max="2030-12-31" displayFormat="DD/MM/YYYY" pickerFormat="DD MM YYYY"></ion-datetime>\n                </ion-item>\n            </ion-col>\n            <ion-col col-4>\n                <ion-item>\n                    <ion-label>Time:</ion-label>\n                    <ion-datetime [(ngModel)]="task.time" max="2030-12-31" displayFormat="HH:mm" pickerFormat="HH mm"></ion-datetime>\n                </ion-item>\n            </ion-col>\n            <ion-col col-4>\n                <ion-item>\n                    <ion-label>Duration:</ion-label>\n                    <ion-datetime [(ngModel)]="task.duration" max="2030-12-31" displayFormat="HH:mm" pickerFormat="HH mm"></ion-datetime>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-item>\n                    <ion-label>Detail:</ion-label>\n                    <ion-textarea type="text" [(ngModel)]="task.detail"></ion-textarea>\n                </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n                <ion-col>\n                    <ion-item>\n                        <ion-label>Assigned To:</ion-label>\n                        <ion-select [(ngModel)]="task.assigned_to">\n                            <ion-option *ngFor="let usr of users" value="{{usr.id}}">{{usr.firstname}} {{usr.name}}</ion-option>\n                        </ion-select>\n                    </ion-item>\n                </ion-col>\n            </ion-row>\n        <button ion-button round block (click)="newtask()">Save</button>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/home/grecomilani/Desktop/ProjetinhoFoda/task manager/src/pages/addtask/addtask.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__app_providers_tabs_service_tabs_service__["a" /* TabsServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_service__["a" /* Service */]])
], AddtaskPage);

//# sourceMappingURL=addtask.js.map

/***/ })

});
//# sourceMappingURL=5.js.map