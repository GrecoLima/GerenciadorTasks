webpackJsonp([6],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Service = (function () {
    function Service(http, toastCtrl) {
        console.log('HelloService Provider');
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.baseUrl = "http://localhost/todo/api_todoin/";
    }
    Service.prototype.getPost = function (category) {
        return this.http.get(this.baseUrl + '' + category).map(function (res) { return res.json(); });
    };
    Service.prototype.getDetails = function (category, val) {
        return this.http.get(this.baseUrl + '' + category + '?id=' + val).map(function (res) { return res.json(); });
    };
    //fonction générique qui appele le script de Login, et les CRUD 
    Service.prototype.doAction = function (link, parametre) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl + '' + link, JSON.stringify(parametre), { headers: headers }).map(function (res) { return res.json(); });
    };
    /*fonction utilisée pour faire la recherche*/
    Service.prototype.search = function (category, action, val, id) {
        return this.http.get(this.baseUrl + '' + category + '/' + action + '?val=' + val + '&user_id=' + id).map(function (res) { return res.json(); });
    };
    Service.prototype.listuser = function () {
        var users = [{ "id": "1", "name": "Lee", "firstname": "kaze", "email": "kazelee@gmail.com", "password": "42a764d5de256dd7b52d94fd988e1785", "created_at": "2018-06-26 16:50:36", "updated_at": "2018-06-26 18:58:33" }, { "id": "2", "name": "Doe", "firstname": "John", "email": "johndoe@gmail.com", "password": "59af941686ccfcdf2642a269fed1c3fc", "created_at": "2018-07-05 00:00:00", "updated_at": "2018-08-16 09:47:00" }, { "id": "3", "name": "Ackerman", "firstname": "Jane", "email": "janeackerman@hotmail.com", "password": "42a764d5de256dd7b52d94fd988e1785", "id_droit": "3", "created_at": "2018-07-05 00:00:00", "updated_at": "2018-07-05 00:00:00" }, { "id": "4", "name": "Down", "firstname": "Claude", "email": "cdown@live.cm", "password": "42a764d5de256dd7b52d94fd988e1785", "created_at": "2018-07-05 00:00:00", "updated_at": "2018-07-05 00:00:00" }, { "0": "5", "1": "Onguene", "2": "Daniel", "3": "donguene@kpmg.cm", "4": "42a764d5de256dd7b52d94fd988e1785", "5": "3", "6": "2018-07-27 17:07:19", "7": "2018-07-27 17:07:19", "id": "5", "name": "Obama", "firstname": "Daniel", "email": "dobama@email.cm", "password": "42a764d5de256dd7b52d94fd988e1785", "created_at": "2018-07-27 17:07:19", "updated_at": "2018-07-27 17:07:19" }];
        return users;
    };
    Service.prototype.listtasks = function () {
        var tasks = [{ "id": "2", "type_activity": "Lunch", "task": "Dinner with Adelaide MOMASSO", "detail": "meeting for negociation", "date_expected": "2018-07-06", "time": "12:30:00", "duration": "02:30:00", "assigned_to": "1", "id_contact": "9", "id_deal": "4", "id_user": "2", "real_close_date": "2018-08-22 09:11:16", "close": "1", "period": "", "reminder": "30", "created_at": "2018-06-27 17:43:41", "updated_at": "2018-06-27 17:43:41", "assigned": "kaze" }, { "id": "9", "type_activity": "Meeting", "task": "Meeting with TM", "detail": "Meeting for Task Manager", "date_expected": "2018-08-17", "time": "12:00:00", "duration": "01:00:00", "assigned_to": "2", "id_contact": "0", "id_deal": "0", "id_user": "2", "real_close_date": "2018-08-22 09:16:12", "close": "1", "period": "", "reminder": "", "created_at": "2018-08-17 09:44:50", "updated_at": "2018-08-17 09:44:50", "assigned": "John" }, { "id": "10", "type_activity": "Deadline", "task": "Deadline of Task Manager", "detail": "Deadline for the project", "date_expected": "2018-08-31", "time": "12:00:00", "duration": "01:00:00", "assigned_to": "2", "id_contact": "0", "id_deal": "0", "id_user": "2", "real_close_date": null, "close": "0", "period": "", "reminder": "", "created_at": "2018-08-17 09:46:47", "updated_at": "2018-08-17 09:46:47", "assigned": "John Doe" }, { "id": "11", "type_activity": "Email", "task": "Email to RH", "detail": "Send email to my contract", "date_expected": "2018-10-15", "time": "09:00:00", "duration": "00:10:00", "assigned_to": "2", "id_contact": "0", "id_deal": "0", "id_user": "2", "real_close_date": null, "close": "0", "period": "", "reminder": "", "created_at": "2018-08-17 09:49:23", "updated_at": "2018-08-17 09:49:23", "assigned": "Daniel" }, { "id": "12", "type_activity": "Meeting", "task": "meeting with the CEO of Brain Systems", "detail": "Meeting with CEO of Brain Systems for discuss about the future of company.", "date_expected": "2018-08-25", "time": "10:00:00", "duration": "03:00:00", "assigned_to": "2", "id_contact": "0", "id_deal": "0", "id_user": "2", "real_close_date": null, "close": "0", "period": "Weekly", "reminder": "60", "created_at": "2018-08-22 10:30:49", "updated_at": "2018-08-22 10:30:49", "assigned": "Claude" }, { "id": "3", "type_activity": "Task", "task": "Timesheet Workout", "detail": "Give the timesheet to my partner", "date_expected": "2018-07-08", "time": "17:00:00", "duration": "00:30:00", "assigned_to": "3", "id_contact": "7", "id_deal": "0", "id_user": "1", "real_close_date": "2018-07-06 11:45:24", "close": "1", "period": "", "reminder": "30", "created_at": "2018-07-05 16:09:34", "updated_at": "2018-07-05 16:09:34", "assigned": "Jane" }, { "id": "4", "type_activity": "Task", "task": "meeting with my wife", "detail": "Meeting with my wife in MGM", "date_expected": "2018-07-05", "time": "17:00:00", "duration": "01:20:00", "assigned_to": "3", "id_contact": "7", "id_deal": "0", "id_user": "2", "real_close_date": "2018-07-06 11:29:02", "close": "1", "period": "", "reminder": "30", "created_at": "2018-07-05 18:39:34", "updated_at": "2018-07-05 18:39:34", "assigned": "John" }, { "id": "6", "type_activity": "Task", "task": "IT log Issues", "detail": "Give IT log issues to TM", "date_expected": "2018-07-06", "time": "17:00:00", "duration": "00:30:00", "assigned_to": "3", "id_contact": "7", "id_deal": "0", "id_user": "1", "real_close_date": "2018-07-09 11:45:24", "close": "1", "period": "", "reminder": "30", "created_at": "2018-07-05 16:09:34", "updated_at": "2018-07-05 16:09:34", "assigned": "Daniel" }, { "id": "5", "type_activity": "Meeting", "task": "Financial report", "detail": "Send financial report to TM.", "date_expected": "2018-07-09", "time": "17:00:00", "duration": "01:20:00", "assigned_to": "4", "id_contact": "7", "id_deal": "0", "id_user": "1", "real_close_date": "2018-07-10 11:29:02", "close": "1", "period": "", "reminder": "30", "created_at": "2018-07-05 18:39:34", "updated_at": "2018-07-02 08:32:09", "assigned": "Claude" }, { "id": "7", "type_activity": "Task", "task": "Bank info", "detail": "Bank account state", "date_expected": "2018-07-23", "time": "11:30:00", "duration": "00:30:00", "assigned_to": "4", "id_contact": "7", "id_deal": "0", "id_user": "2", "real_close_date": "2018-08-07 10:34:00", "close": "1", "period": "Weekly", "reminder": "45", "created_at": "2018-07-23 10:47:35", "updated_at": "2018-07-23 10:47:35", "assigned": "Claude" }];
        return tasks;
    };
    Service.prototype.infotask = function () {
        var variable = { $lateliste: [0, 0, 0, 0, 0, 0, 0, 0, 1, 4, 1, 0], $cumullate: [0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 6, 6] };
        return variable;
    };
    Service.prototype.counttask = function () {
        var variable = { "global": { "close": "7", "open": "3", "late": "6" }, "mensual": { "close": "1", "open": "3", "late": "1" }, "annual": { "close": "7", "open": "3", "late": "6" } };
        return variable;
    };
    Service.prototype.dashgraph = function () {
        var variable = { "annual": { "label": ["kaze Lee", "John Doe", "Jane Ackerman", "Claude Down"], "nbre": ["1", "1", "2", "2"] }, "mensual": { "label": ["John Doe"], "nbre": ["1"] } };
        return variable;
    };
    Service.prototype.toastmessage = function (message, pos) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: pos
        });
        toast.present();
    };
    return Service;
}());
Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__["a" /* ToastController */]])
], Service);

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, service) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.service = service;
        this.trans = { mensual: {}, global: {}, annual: {} };
        this.user = JSON.parse(localStorage.getItem('todoin_user'));
        setTimeout(function () {
            _this.infotask();
            _this.listtransmois();
            _this.dashgraph();
        }, 1000);
    }
    HomePage.prototype.ionViewWillEnter = function () {
        console.log('ionviewWillEnter');
    };
    HomePage.prototype.infotask = function () {
        var data = this.service.dashgraph();
        var backg = [];
        //choix aleatoire de couleur
        for (var index = 0; index < data.annual.nbre.length; index++) {
            backg[index] = this.randomColor(0, 255);
        }
        //graphes
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: data.mensual.label,
                datasets: [{
                        data: data.mensual.nbre,
                        backgroundColor: backg,
                        hoverBackgroundColor: backg
                    }]
            }
        });
        this.doughnutChart1 = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.doughnutCanvas1.nativeElement, {
            type: 'doughnut',
            data: {
                labels: data.annual.label,
                datasets: [{
                        data: data.annual.nbre,
                        backgroundColor: backg,
                        hoverBackgroundColor: backg
                    }]
            }
        });
    };
    HomePage.prototype.dashgraph = function () {
        var data = this.service.infotask();
        var label = ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'];
        this.lineChart = new __WEBPACK_IMPORTED_MODULE_3_chart_js__["Chart"](this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: label,
                datasets: [
                    {
                        label: "late activities",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: data.$lateliste,
                        spanGaps: false,
                    },
                    {
                        label: "Cumulative late activities",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(234, 147, 71,0.4)",
                        borderColor: "rgba(234, 147, 71,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(234, 147, 71,1)",
                        pointHoverBorderColor: "rgba(14, 147, 71,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: data.$cumullate,
                        spanGaps: false,
                    }
                ]
            }
        });
    };
    HomePage.prototype.listtransmois = function () {
        this.trans = this.service.counttask();
    };
    HomePage.prototype.randomColor = function (min, max) {
        var r = Math.floor(Math.random() * (max - min) + min);
        var g = Math.floor(Math.random() * (max - min) + min);
        var b = Math.floor(Math.random() * (max - min) + min);
        var color = "rgb(" + r + ", " + g + ", " + b + ")";
        return color;
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('lineCanvas'),
    __metadata("design:type", Object)
], HomePage.prototype, "lineCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('doughnutCanvas'),
    __metadata("design:type", Object)
], HomePage.prototype, "doughnutCanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('doughnutCanvas1'),
    __metadata("design:type", Object)
], HomePage.prototype, "doughnutCanvas1", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/grecomilani/Desktop/ProjetinhoFoda/task manager/src/pages/home/home.html"*/'<ion-header>\n    <ion-navbar color=primary>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Dashboard</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="head-div">\n        <div style="text-align: center;">\n            <span class="solde">Esse mes</span> \n        </div>\n        <ion-row>\n            <ion-col col-4>\n                <table>\n                    <tr>\n                        <td class="tab-icon">\n                            <h4 class="entete">{{trans.mensual.open}}</h4>\n                        </td>\n                        <td>\n                            <p class="entete"><i>Open<br/> Activities</i></p>\n                        </td>\n                    </tr>\n                </table>\n            </ion-col>\n            <ion-col col-4>\n                <table>\n                    <tr>\n                        <td class="tab-icon">\n                            <h4 class="entete">{{trans.mensual.close}}</h4>                                \n                        </td>\n                        <td>\n                            <p class="entete"><i>Close<br/> Activities</i></p>\n                        </td>\n                    </tr>\n                </table>\n            </ion-col>\n            <ion-col col-4>\n                <table>\n                    <tr>\n                        <td class="tab-icon">\n                            <h4 class="entete">{{trans.mensual.late}}</h4>                                \n                        </td>\n                        <td>\n                            <p class="entete"><i>Late <br/>activities</i></p>\n                        </td>\n                    </tr>\n                </table>\n            </ion-col>\n        </ion-row>\n        <div style="text-align: center;">\n            <span class="solde">This Season</span>\n       </div>\n       <ion-row>\n           <ion-col col-4>\n               <table>\n                   <tr>\n                       <td class="tab-icon">\n                           <h4 class="entete">{{trans.annual.open}}</h4>\n                       </td>\n                       <td>\n                           <p class="entete"><i>Open<br/> Activities</i></p>\n                       </td>\n                   </tr>\n               </table>\n           </ion-col>\n           <ion-col col-4>\n               <table>\n                   <tr>\n                       <td class="tab-icon">\n                           <h4 class="entete">{{trans.annual.close}}</h4>                                \n                       </td>\n                       <td>\n                           <p class="entete"><i>Close<br/> Activities</i></p>\n                       </td>\n                   </tr>\n               </table>\n           </ion-col>\n           <ion-col col-4>\n               <table>\n                   <tr>\n                       <td class="tab-icon">\n                           <h4 class="entete">{{trans.annual.late}}</h4>                                \n                       </td>\n                       <td>\n                           <p class="entete"><i>Late <br/>activities</i></p>\n                       </td>\n                   </tr>\n               </table>\n           </ion-col>\n       </ion-row>\n       <div style="text-align: center;">\n        <span class="solde">Global</span>\n        </div>\n   <ion-row>\n       <ion-col col-4>\n           <table>\n               <tr>\n                   <td class="tab-icon">\n                       <h4 class="entete">{{trans.global.open}}</h4>\n                   </td>\n                   <td>\n                       <p class="entete"><i>Open<br/> Activities</i></p>\n                   </td>\n               </tr>\n           </table>\n       </ion-col>\n       <ion-col col-4>\n           <table>\n               <tr>\n                   <td class="tab-icon">\n                       <h4 class="entete">{{trans.global.close}}</h4>                                \n                   </td>\n                   <td>\n                       <p class="entete"><i>Close<br/> Activities</i></p>\n                   </td>\n               </tr>\n           </table>\n       </ion-col>\n       <ion-col col-4>\n           <table>\n               <tr>\n                   <td class="tab-icon">\n                       <h4 class="entete">{{trans.global.late}}</h4>                                \n                   </td>\n                   <td>\n                       <p class="entete"><i>Late <br/>activities</i></p>\n                   </td>\n               </tr>\n           </table>\n       </ion-col>\n   </ion-row>\n    </div>\n    <ion-card>\n      <ion-card-header text-wrap>\n        Distribution of late activities by user (this month)\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #doughnutCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n    \n    <ion-card>\n        <ion-card-header text-wrap>\n          Distribution of late activities by user (this season)\n        </ion-card-header>\n        <ion-card-content>\n          <canvas #doughnutCanvas1></canvas>\n        </ion-card-content>\n      </ion-card>\n\n    <ion-card>\n      <ion-card-header text-wrap>\n        Late activities of the season\n      </ion-card-header>\n      <ion-card-content>\n        <canvas #lineCanvas></canvas>\n      </ion-card-content>\n    </ion-card>\n    \n</ion-content>'/*ion-inline-end:"/home/grecomilani/Desktop/ProjetinhoFoda/task manager/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service__["a" /* Service */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addtask/addtask.module": [
		396,
		5
	],
	"../pages/changepass/changepass.module": [
		397,
		4
	],
	"../pages/login/login.module": [
		398,
		3
	],
	"../pages/profil/profil.module": [
		399,
		2
	],
	"../pages/tasks/tasks.module": [
		400,
		1
	],
	"../pages/virement/virement.module": [
		401,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the TabsServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var TabsServiceProvider = (function () {
    function TabsServiceProvider(http) {
        this.http = http;
        console.log('Hello TabsServiceProvider Provider');
    }
    TabsServiceProvider.prototype.hide = function () {
        var tabs = document.querySelectorAll('.tabbar');
        var scrollContent = document.querySelectorAll('.scroll-content');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.transform = 'translateY(56px)';
            });
            // fix for removing the margin if you got scorllable content
            setTimeout(function () {
                Object.keys(scrollContent).map(function (key) {
                    scrollContent[key].style.marginBottom = '0';
                });
            });
        }
    };
    TabsServiceProvider.prototype.show = function () {
        var tabs = document.querySelectorAll('.tabbar');
        if (tabs !== null) {
            Object.keys(tabs).map(function (key) {
                tabs[key].style.transform = 'translateY(0px)';
            });
        }
    };
    return TabsServiceProvider;
}());
TabsServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], TabsServiceProvider);

//# sourceMappingURL=tabs-service.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(344);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_tabs_service_tabs_service__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_service__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/addtask/addtask.module#NewcartePageModule', name: 'AddtaskPage', segment: 'addtask', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/changepass/changepass.module#ChangepassPageModule', name: 'ChangepassPage', segment: 'changepass', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profil/profil.module#ProfilPageModule', name: 'ProfilPage', segment: 'profil', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tasks/tasks.module#TasksPageModule', name: 'TasksPage', segment: 'tasks', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/virement/virement.module#VirementPageModule', name: 'VirementPage', segment: 'virement', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__providers_service__["a" /* Service */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__providers_tabs_service_tabs_service__["a" /* TabsServiceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 156,
	"./af.js": 156,
	"./ar": 157,
	"./ar-dz": 158,
	"./ar-dz.js": 158,
	"./ar-kw": 159,
	"./ar-kw.js": 159,
	"./ar-ly": 160,
	"./ar-ly.js": 160,
	"./ar-ma": 161,
	"./ar-ma.js": 161,
	"./ar-sa": 162,
	"./ar-sa.js": 162,
	"./ar-tn": 163,
	"./ar-tn.js": 163,
	"./ar.js": 157,
	"./az": 164,
	"./az.js": 164,
	"./be": 165,
	"./be.js": 165,
	"./bg": 166,
	"./bg.js": 166,
	"./bm": 167,
	"./bm.js": 167,
	"./bn": 168,
	"./bn.js": 168,
	"./bo": 169,
	"./bo.js": 169,
	"./br": 170,
	"./br.js": 170,
	"./bs": 171,
	"./bs.js": 171,
	"./ca": 172,
	"./ca.js": 172,
	"./cs": 173,
	"./cs.js": 173,
	"./cv": 174,
	"./cv.js": 174,
	"./cy": 175,
	"./cy.js": 175,
	"./da": 176,
	"./da.js": 176,
	"./de": 177,
	"./de-at": 178,
	"./de-at.js": 178,
	"./de-ch": 179,
	"./de-ch.js": 179,
	"./de.js": 177,
	"./dv": 180,
	"./dv.js": 180,
	"./el": 181,
	"./el.js": 181,
	"./en-SG": 182,
	"./en-SG.js": 182,
	"./en-au": 183,
	"./en-au.js": 183,
	"./en-ca": 184,
	"./en-ca.js": 184,
	"./en-gb": 185,
	"./en-gb.js": 185,
	"./en-ie": 186,
	"./en-ie.js": 186,
	"./en-il": 187,
	"./en-il.js": 187,
	"./en-nz": 188,
	"./en-nz.js": 188,
	"./eo": 189,
	"./eo.js": 189,
	"./es": 190,
	"./es-do": 191,
	"./es-do.js": 191,
	"./es-us": 192,
	"./es-us.js": 192,
	"./es.js": 190,
	"./et": 193,
	"./et.js": 193,
	"./eu": 194,
	"./eu.js": 194,
	"./fa": 195,
	"./fa.js": 195,
	"./fi": 196,
	"./fi.js": 196,
	"./fo": 197,
	"./fo.js": 197,
	"./fr": 198,
	"./fr-ca": 199,
	"./fr-ca.js": 199,
	"./fr-ch": 200,
	"./fr-ch.js": 200,
	"./fr.js": 198,
	"./fy": 201,
	"./fy.js": 201,
	"./ga": 202,
	"./ga.js": 202,
	"./gd": 203,
	"./gd.js": 203,
	"./gl": 204,
	"./gl.js": 204,
	"./gom-latn": 205,
	"./gom-latn.js": 205,
	"./gu": 206,
	"./gu.js": 206,
	"./he": 207,
	"./he.js": 207,
	"./hi": 208,
	"./hi.js": 208,
	"./hr": 209,
	"./hr.js": 209,
	"./hu": 210,
	"./hu.js": 210,
	"./hy-am": 211,
	"./hy-am.js": 211,
	"./id": 212,
	"./id.js": 212,
	"./is": 213,
	"./is.js": 213,
	"./it": 214,
	"./it-ch": 215,
	"./it-ch.js": 215,
	"./it.js": 214,
	"./ja": 216,
	"./ja.js": 216,
	"./jv": 217,
	"./jv.js": 217,
	"./ka": 218,
	"./ka.js": 218,
	"./kk": 219,
	"./kk.js": 219,
	"./km": 220,
	"./km.js": 220,
	"./kn": 221,
	"./kn.js": 221,
	"./ko": 222,
	"./ko.js": 222,
	"./ku": 223,
	"./ku.js": 223,
	"./ky": 224,
	"./ky.js": 224,
	"./lb": 225,
	"./lb.js": 225,
	"./lo": 226,
	"./lo.js": 226,
	"./lt": 227,
	"./lt.js": 227,
	"./lv": 228,
	"./lv.js": 228,
	"./me": 229,
	"./me.js": 229,
	"./mi": 230,
	"./mi.js": 230,
	"./mk": 231,
	"./mk.js": 231,
	"./ml": 232,
	"./ml.js": 232,
	"./mn": 233,
	"./mn.js": 233,
	"./mr": 234,
	"./mr.js": 234,
	"./ms": 235,
	"./ms-my": 236,
	"./ms-my.js": 236,
	"./ms.js": 235,
	"./mt": 237,
	"./mt.js": 237,
	"./my": 238,
	"./my.js": 238,
	"./nb": 239,
	"./nb.js": 239,
	"./ne": 240,
	"./ne.js": 240,
	"./nl": 241,
	"./nl-be": 242,
	"./nl-be.js": 242,
	"./nl.js": 241,
	"./nn": 243,
	"./nn.js": 243,
	"./pa-in": 244,
	"./pa-in.js": 244,
	"./pl": 245,
	"./pl.js": 245,
	"./pt": 246,
	"./pt-br": 247,
	"./pt-br.js": 247,
	"./pt.js": 246,
	"./ro": 248,
	"./ro.js": 248,
	"./ru": 249,
	"./ru.js": 249,
	"./sd": 250,
	"./sd.js": 250,
	"./se": 251,
	"./se.js": 251,
	"./si": 252,
	"./si.js": 252,
	"./sk": 253,
	"./sk.js": 253,
	"./sl": 254,
	"./sl.js": 254,
	"./sq": 255,
	"./sq.js": 255,
	"./sr": 256,
	"./sr-cyrl": 257,
	"./sr-cyrl.js": 257,
	"./sr.js": 256,
	"./ss": 258,
	"./ss.js": 258,
	"./sv": 259,
	"./sv.js": 259,
	"./sw": 260,
	"./sw.js": 260,
	"./ta": 261,
	"./ta.js": 261,
	"./te": 262,
	"./te.js": 262,
	"./tet": 263,
	"./tet.js": 263,
	"./tg": 264,
	"./tg.js": 264,
	"./th": 265,
	"./th.js": 265,
	"./tl-ph": 266,
	"./tl-ph.js": 266,
	"./tlh": 267,
	"./tlh.js": 267,
	"./tr": 268,
	"./tr.js": 268,
	"./tzl": 269,
	"./tzl.js": 269,
	"./tzm": 270,
	"./tzm-latn": 271,
	"./tzm-latn.js": 271,
	"./tzm.js": 270,
	"./ug-cn": 272,
	"./ug-cn.js": 272,
	"./uk": 273,
	"./uk.js": 273,
	"./ur": 274,
	"./ur.js": 274,
	"./uz": 275,
	"./uz-latn": 276,
	"./uz-latn.js": 276,
	"./uz.js": 275,
	"./vi": 277,
	"./vi.js": 277,
	"./x-pseudo": 278,
	"./x-pseudo.js": 278,
	"./yo": 279,
	"./yo.js": 279,
	"./zh-cn": 280,
	"./zh-cn.js": 280,
	"./zh-hk": 281,
	"./zh-hk.js": 281,
	"./zh-tw": 282,
	"./zh-tw.js": 282
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 370;

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(104);
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






var MyApp = (function () {
    function MyApp(platform, alertCtrl, statusBar, splashScreen) {
        this.alertCtrl = alertCtrl;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.user = JSON.parse(localStorage.getItem('todoin_user'));
        if (!this.user) {
            this.rootPage = "LoginPage";
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        }
        this.pages = [
            { title: 'Dashboard', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icone: 'home' },
            { title: 'Tasks', component: "TasksPage", icone: 'list' },
            { title: 'Profile', component: "ProfilPage", icone: 'contact' },
            { title: 'Change Password', component: "ChangepassPage", icone: 'lock' },
        ];
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        var confirmAlert = this.alertCtrl.create({
            title: "Information",
            message: "Do you really want to exit the application ?",
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        return;
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        localStorage.removeItem('todoin_user');
                        _this.nav.setRoot("LoginPage");
                    }
                }
            ]
        });
        confirmAlert.present();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/grecomilani/Desktop/ProjetinhoFoda/task manager/src/app/app.html"*/'<ion-menu [content]="content">\n\n    <ion-header>\n        <ion-toolbar color="primary">\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icone}}"></ion-icon>&nbsp; {{p.title}}\n      </button>\n            <button menuClose ion-item (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>&nbsp; Logout\n      </button>\n        </ion-list>\n    </ion-content>\n<ion-footer>\n    <ion-list no-list>\n        <ion-item>\n            <ion-avatar item-left>\n                <img src="assets/profil.png" alt="">\n            </ion-avatar>\n            <h4>Greco Milani</h4>\n            <p>greco.lima.milani@ibm.com</p>        \n        </ion-item>\n    </ion-list>\n</ion-footer>\n</ion-menu>\n\n<ion-nav id="nav" [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/grecomilani/Desktop/ProjetinhoFoda/task manager/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_alert_alert_controller__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[325]);
//# sourceMappingURL=main.js.map