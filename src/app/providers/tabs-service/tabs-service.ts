import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TabsServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TabsServiceProvider {

  constructor(public http: Http) {
    console.log('Hello TabsServiceProvider Provider');
  }

  public hide() {
    let tabs = document.querySelectorAll('.tabbar');
    let scrollContent = document.querySelectorAll('.scroll-content');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.transform = 'translateY(56px)';
      });

      // fix for removing the margin if you got scorllable content
      setTimeout(() =>{
        Object.keys(scrollContent).map((key) => {
          scrollContent[key].style.marginBottom = '0';
        });
      })
    }
  }

  public show() {
    let tabs = document.querySelectorAll('.tabbar');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.transform = 'translateY(0px)';
      });
    }
  }

}
