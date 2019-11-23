import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Service } from '../../providers/service';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@IonicPage()
@Component({
  selector: 'page-virement',
  templateUrl: 'virement.html'
})
export class VirementPage {

task: any;
user: any;

  constructor(public navParam: NavParams, public navCtrl: NavController, public service: Service) {
    this.task= navParam.get('item');
  }

}
