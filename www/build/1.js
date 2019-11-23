webpackJsonp([1],{

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksPageModule", function() { return TasksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TasksPageModule = (function () {
    function TasksPageModule() {
    }
    return TasksPageModule;
}());
TasksPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tasks__["a" /* TasksPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tasks__["a" /* TasksPage */]),
        ],
    })
], TasksPageModule);

//# sourceMappingURL=tasks.module.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksPage; });
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
 * Generated class for the TasksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TasksPage = (function () {
    function TasksPage(navCtrl, navParams, toastCtrl, view, loading, alert, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.view = view;
        this.loading = loading;
        this.alert = alert;
        this.service = service;
        this.tasks = [];
        this.order = "order";
        this.num_page = 1;
        this.search = "";
        this.type = "";
        this.close = "";
        this.created = "";
        this.assign = "";
        this.toggleGroup = function (group) {
            if (this.isGroupShown(group)) {
                this.shownGroup = null;
            }
            else {
                this.shownGroup = group;
            }
        };
        this.isGroupShown = function (group) {
            return this.shownGroup === group;
        };
        this.listeuser();
    }
    TasksPage.prototype.ionViewDidLoad = function () {
        this.liste(0);
    };
    TasksPage.prototype.ionViewDidEnter = function () {
        this.liste(0);
    };
    TasksPage.prototype.listesuivante = function (infiniteScroll) {
        var _this = this;
        this.num_page = this.num_page + 1;
        setTimeout(function () {
            _this.tasks = _this.service.listtasks();
            infiniteScroll.complete();
        }, 500);
    };
    TasksPage.prototype.liste = function (refresher) {
        var _this = this;
        var loader = this.loading.create({
            content: "Carregando...",
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            _this.num_page = 1;
            _this.tasks = _this.service.listtasks();
        }, 1000);
        if (refresher != 0)
            refresher.complete();
    };
    TasksPage.prototype.deleteData = function (id) {
        var _this = this;
        var confirmAlert = this.alert.create({
            title: "Aviso",
            message: "Você deseja remover essa ocorrência?",
            buttons: [
                {
                    text: 'Não',
                    handler: function () {
                        return;
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        var loader = _this.loading.create({
                            content: "Carregando...",
                        });
                        loader.present();
                        setTimeout(function () {
                            loader.dismiss();
                            _this.num_page = 1;
                            _this.liste(0);
                        }, 1000);
                    }
                }
            ]
        });
        confirmAlert.present();
    };
    TasksPage.prototype.closeData = function (id) {
        var _this = this;
        var confirmAlert = this.alert.create({
            title: "Aviso",
            message: "Você deseja fechar essa ocorrência?",
            buttons: [
                {
                    text: 'Não',
                    handler: function () {
                        return;
                    }
                },
                {
                    text: 'Sim',
                    handler: function () {
                        var loader = _this.loading.create({
                            content: "Carregando...",
                        });
                        loader.present();
                        setTimeout(function () {
                            loader.dismiss();
                            _this.num_page = 1;
                            _this.liste(0);
                        }, 1000);
                    }
                }
            ]
        });
        confirmAlert.present();
    };
    TasksPage.prototype.listeuser = function () {
        this.users = this.service.listuser();
    };
    return TasksPage;
}());
TasksPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tasks',template:/*ion-inline-start:"/home/grecomilani/Desktop/ProjetinhoFoda/task manager/src/pages/tasks/tasks.html"*/'<!--\n  Generated template for the RendezVousPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color=primary>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Ocorrências</ion-title>\n        <ion-buttons right>\n            <button detail-push navPush="AddtaskPage" ion-button><ion-icon name="add-circle"></ion-icon></button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-row class="searchzone">\n        <ion-col col-11>\n            <ion-searchbar placeholder="Pesquisar"  [(ngModel)]="search" (ionInput)="liste(0)"></ion-searchbar>                    \n        </ion-col>\n        <ion-col col-1>\n               <p (click)="toggleGroup(order)"><a><ion-icon name="settings"></ion-icon></a>  </p>               \n        </ion-col>\n    </ion-row>\n    <ion-row *ngIf="isGroupShown(order)">\n        <ion-col col-6>\n            <ion-item>\n                <ion-label>Ocorrência Status</ion-label>\n                <ion-select [(ngModel)]="close" (ionChange)="liste(0)">\n                    <ion-option value="">All</ion-option>\n                    <ion-option value="0">Aberta</ion-option>\n                    <ion-option value="1">Fechado</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-col>\n        <ion-col col-6>\n            <ion-item>\n                <ion-label>Atribuído para</ion-label>\n                <ion-select [(ngModel)]="assign" (ionChange)="liste(0)">\n                    <ion-option value="">Todas</ion-option>\n                    <ion-option *ngFor="let usr of users" value="{{usr.id}}">{{usr.firstname}} {{usr.name}}</ion-option>\n                </ion-select>\n            </ion-item>  \n        </ion-col>\n        <ion-col col-6>\n            <ion-item>\n                <ion-label>Criada por</ion-label>\n                <ion-select [(ngModel)]="created" (ionChange)="liste(0)">\n                    <ion-option value="">Todas</ion-option>\n                    <ion-option *ngFor="let usrr of users" value="{{usrr.id}}">{{usrr.firstname}} {{usrr.name}}</ion-option>\n                </ion-select>\n            </ion-item>     \n        </ion-col>\n        <ion-col col-6>\n            <ion-item>\n                <ion-label>Tipo da Ocorrência</ion-label>\n                <ion-select [(ngModel)]="type" (ionChange)="liste(0)">\n                    <ion-option value="">All</ion-option>\n                    <ion-option value="Call">Urgente</ion-option>\n                    <ion-option value="Meeting">Grave</ion-option>\n                    <ion-option value="Task">Acidente</ion-option>\n                    <ion-option value="Deadline">Acidente Natural</ion-option>\n                    <ion-option value="Email">Patrulha</ion-option>\n                    <ion-option value="Lunch">Dúvidas</ion-option>\n                </ion-select>\n            </ion-item>           \n        </ion-col>\n    </ion-row>\n    <ion-list text-wrap>    \n        <ion-item-sliding *ngFor="let task of tasks">\n            <ion-item >\n                <img src="assets/Calendar.png" item-left alt="">\n                <h2>{{task.task}}</h2>\n                <p>Atribuído para: {{task.assigned}}</p>\n                <p class="type">{{task.type_activity}}</p>\n                <p class="close" *ngIf="task.close===\'1\'" color="danger"><i class="badge">Fechado</i></p>\n            </ion-item>\n            <ion-item-options side="right">\n                <button ion-button color="secondary" detail-push navPush="VirementPage" [navParams]=" {item:task}">\n                    <ion-icon name="paper"></ion-icon>\n                </button>\n                <button ion-button color="danger" (click)="deleteData(task.id)">\n                    <ion-icon name="trash"></ion-icon>\n                </button>\n                <button ion-button color="primary" (click)="closeData(task.id)">\n                        <ion-icon name="close"></ion-icon>\n                    </button>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n\n    <ion-infinite-scroll (ionInfinite)="listesuivante($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n    <ion-refresher (ionRefresh)="liste($event)">\n        <ion-refresher-content pullingIcon="arrow-dropdown" pullingText="Pull to refresh" refreshingSpinner="circles" refreshingText="Carregando...">\n        </ion-refresher-content>\n    </ion-refresher>\n</ion-content>'/*ion-inline-end:"/home/grecomilani/Desktop/ProjetinhoFoda/task manager/src/pages/tasks/tasks.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */]])
], TasksPage);

//# sourceMappingURL=tasks.js.map

/***/ })

});
//# sourceMappingURL=1.js.map