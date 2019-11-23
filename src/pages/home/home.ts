import { Component, ViewChild} from '@angular/core';
import { NavController} from 'ionic-angular';
import { Service } from '../../providers/service';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('doughnutCanvas1') doughnutCanvas1;
  lineChart: any;
  doughnutChart: any;
  doughnutChart1: any;
  user: any;
  trans={mensual:{}, global: {}, annual:{}};
  constructor(public navCtrl: NavController, public service: Service) {
    this.user= JSON.parse(localStorage.getItem('todoin_user'));
    setTimeout(() => {
        this.infotask();
        this.listtransmois();
        this.dashgraph();          
      }, 1000);  
    
  }

 ionViewWillEnter(){
 	console.log('ionviewWillEnter');
  }


  infotask(){
    var data= this.service.dashgraph();
      var backg=[];
      //choix aleatoire de couleur
      for (let index = 0; index < data.annual.nbre.length; index++) {
          backg[index]= this.randomColor(0, 255);
      }

      //graphes
      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
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

               this.doughnutChart1 = new Chart(this.doughnutCanvas1.nativeElement, {
                
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
  }

  dashgraph(){
      var data= this.service.infotask();
      let label= ['Outubro', 'Novembro', 'Dezembro', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro'];
      this.lineChart = new Chart(this.lineCanvas.nativeElement, {
       
                  type: 'line',
                  data: {
                      labels: label,
                      datasets: [
                          {
                              label: "Graves",
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
                           label: "Ocorrências resolvidas",
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
 }

    listtransmois(){
        this.trans= this.service.counttask();
  }

  randomColor(min, max){
    var r= Math.floor(Math.random() * (max - min) + min);
    var g= Math.floor(Math.random() * (max - min) + min);
    var b= Math.floor(Math.random() * (max - min) + min);

    var color= "rgb("+r+", "+g+", "+b+")";

    return color;
}

}
