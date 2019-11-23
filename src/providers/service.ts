import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Service {

  http: any;
  toastCtrl:any;
	baseUrl: String;

  constructor(http: Http, toastCtrl: ToastController) {
    console.log('HelloService Provider');
    this.http = http;
    this.toastCtrl= toastCtrl;
	this.baseUrl = "http://localhost/todo/api_todoin/";
  }

  getPost(category){
		return this.http.get(this.baseUrl+''+category).map(res => res.json());
	}

  getDetails(category, val){
    return this.http.get(this.baseUrl+''+category+'?id='+val).map(res => res.json());
  }

	//fonction générique qui appele le script de Login, et les CRUD 
	doAction(link, parametre){
		var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseUrl+''+link, JSON.stringify(parametre), {headers: headers}).map(res =>res.json());
    }

    /*fonction utilisée pour faire la recherche*/
    search(category,action,val,id){
    	return this.http.get(this.baseUrl+''+category+'/'+action+'?val='+val+'&user_id='+id).map(res =>res.json());
    }

    listuser(){
      let users= [{"id":"1","name":"Lee","firstname":"Teiji","email":"teiji@gmail.com","password":"42a764d5de256dd7b52d94fd988e1785","created_at":"2018-06-26 16:50:36","updated_at":"2018-06-26 18:58:33"},{"id":"2","name":"Milani","firstname":"Greco","email":"Greco@gmail.com","password":"59af941686ccfcdf2642a269fed1c3fc","created_at":"2018-07-05 00:00:00","updated_at":"2018-08-16 09:47:00"},{"id":"3","name":"Perini","firstname":"Lais","email":"LaisPerini@hotmail.com","password":"42a764d5de256dd7b52d94fd988e1785","id_droit":"3","created_at":"2018-07-05 00:00:00","updated_at":"2018-07-05 00:00:00"},{"id":"4","name":"Lemos","firstname":"Leonardo","email":"Leronardo@live.cm","password":"42a764d5de256dd7b52d94fd988e1785","created_at":"2018-07-05 00:00:00","updated_at":"2018-07-05 00:00:00"},{"0":"5","1":"Musk","2":"Elon","3":"ElonMusk@spacex.us","4":"42a764d5de256dd7b52d94fd988e1785","5":"3","6":"2018-07-27 17:07:19","7":"2018-07-27 17:07:19","id":"5","name":"Cobain","firstname":"Kurt","email":"dobama@email.cm","password":"42a764d5de256dd7b52d94fd988e1785","created_at":"2018-07-27 17:07:19","updated_at":"2018-07-27 17:07:19"}];
    
      return users;
    }

    listtasks(){
      let tasks = [{"id":"2","type_activity":"Acidente Natural","task":"Pista interditada","detail":"árvore caída na pista","date_expected":"2019-11-21","time":"11:30:00","duration":"01:20:00","assigned_to":"1","id_contact":"9","id_deal":"4","id_user":"2","real_close_date":"2019-11-22 09:11:16","close":"1","period":"","reminder":"30","created_at":"2018-06-27 17:43:41","updated_at":"2018-06-27 17:43:41","assigned":"Leonardo"},{"id":"9","type_activity":"Patrulha","task":"Operação Descida","detail":"Operação para duplicar faixas","date_expected":"2019-11-20","time":"08:00:00","duration":"01:50:00","assigned_to":"2","id_contact":"0","id_deal":"0","id_user":"2","real_close_date":"2019-11-22 09:16:12","close":"1","period":"","reminder":"","created_at":"2019-11-17 09:44:50","updated_at":"2019-11-17 09:44:50","assigned":"João"},{"id":"10","type_activity":"Urgente","task":"Acidente - Batida","detail":"Acidente na via x","date_expected":"2019-11-15","time":"17:10:55","duration":"01:00:00","assigned_to":"2","id_contact":"0","id_deal":"0","id_user":"2","real_close_date":null,"close":"0","period":"","reminder":"","created_at":"2018-08-17 09:46:47","updated_at":"2018-08-17 09:46:47","assigned":"Lais"},{"id":"11","type_activity":"Patrulha","task":"Fiscalizacao","detail":"Fiscalizacao obrigatória","date_expected":"2019-11-15","time":"08:00:00","duration":"01:20:00","assigned_to":"2","id_contact":"0","id_deal":"0","id_user":"2","real_close_date":null,"close":"0","period":"","reminder":"","created_at":"2018-08-17 09:49:23","updated_at":"2018-08-17 09:49:23","assigned":"Daniel"},{"id":"12","type_activity":"Grave","task":"Paralização parcial da via x","detail":"Paralalização","date_expected":"2019-10-15","time":"10:00:00","duration":"03:00:00","assigned_to":"2","id_contact":"0","id_deal":"0","id_user":"2","real_close_date":null,"close":"0","period":"Weekly","reminder":"60","created_at":"2018-08-22 10:30:49","updated_at":"2018-08-22 10:30:49","assigned":"Pedro"},{"id":"3","type_activity":"Patrulha","task":"Obras","detail":"Pavimentação da via x","date_expected":"2018-07-08","time":"17:00:00","duration":"00:30:00","assigned_to":"3","id_contact":"7","id_deal":"0","id_user":"1","real_close_date":"2018-07-06 11:45:24","close":"1","period":"","reminder":"30","created_at":"2018-07-05 16:09:34","updated_at":"2018-07-05 16:09:34","assigned":"Guilherme"},{"id":"4","type_activity":"Patrulha","task":"Incêndio próximo a pista","detail":"Incêndio próximo a pista","date_expected":"2019-11-05","time":"13:00:00","duration":"01:20:00","assigned_to":"3","id_contact":"7","id_deal":"0","id_user":"2","real_close_date":"2019-11-06 11:29:02","close":"1","period":"","reminder":"30","created_at":"2019-11-05 18:39:34","updated_at":"2019-11-05 18:39:34","assigned":"Maria"},{"id":"6","type_activity":"Acidente Natural","task":"Sinalização derrubada devido a chuva","detail":"Placas de sinalização derrubadas devido o vendo forte","date_expected":"2019-10-16","time":"09:00:00","duration":"00:30:00","assigned_to":"3","id_contact":"7","id_deal":"0","id_user":"1","real_close_date":"2019-10-11 11:45:24","close":"1","period":"","reminder":"30","created_at":"2018-07-05 16:09:34","updated_at":"2018-07-05 16:09:34","assigned":"Daniel"},{"id":"5","type_activity":"Patrulha","task":"Fiscalização Radares laço reportada","detail":"Devido ao feriado Operação Fiscalização de radares","date_expected":"2018-07-09","time":"17:00:00","duration":"01:20:00","assigned_to":"4","id_contact":"7","id_deal":"0","id_user":"1","real_close_date":"2018-07-10 11:29:02","close":"1","period":"","reminder":"30","created_at":"2018-07-05 18:39:34","updated_at":"2018-07-02 08:32:09","assigned":"Miguel"},{"id":"7","type_activity":"Grave","task":"Acidente","detail":"Quebrado.","date_expected":"2018-07-23","time":"11:30:00","duration":"00:30:00","assigned_to":"4","id_contact":"7","id_deal":"0","id_user":"2","real_close_date":"2018-08-07 10:34:00","close":"1","period":"Weekly","reminder":"45","created_at":"2018-07-23 10:47:35","updated_at":"2018-07-23 10:47:35","assigned":"Cleiton"}];
      return tasks;
    }

    infotask(){
      let variable= {$lateliste:[0,0,0,0,0,0,0,0,1,4,1,0],$cumullate:[0,0,0,0,0,0,0,0,1,5,6,6]};

      return variable;
    }

    counttask(){
        let variable= {"global":{"close":"7","open":"3","late":"6"},"mensual":{"close":"1","open":"3","late":"1"},"annual":{"close":"7","open":"3","late":"6"}}

        return variable;
    }

    dashgraph(){
        let variable= {"annual":{"label":["Greco Milani","Lais Perini","Teiji Uekita","Leonardo Lemos"],"nbre":["1","1","2","2"]},"mensual":{"label":["Greco Milani"],"nbre":["1"]}};

        return variable;
    }
    
    toastmessage(message, pos){
      let toast = this.toastCtrl.create({
        message: message,
        duration: 3000,
        position: pos
      });
      toast.present();
    }
}
