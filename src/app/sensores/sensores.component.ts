import { Component, OnInit , ViewChild} from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Chart} from 'chart.js';




export interface User {
  id: string;
  name: string;
  Humedad: number;
  Distancia: number;
  Temperatura: number;
  Seconds: number;
}

@Component({
  selector: 'app-sensores',
  templateUrl: './sensores.component.html',
  styleUrls: ['./sensores.component.scss']
})




export class SensoresComponent implements OnInit {


 
	private intervalUpdate: any = null;
  public chart: any = null;
  
  name = 'Angular';

  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<User>;
  docRef: AngularFirestoreDocument<User>;
  items: User[];

  constructor(db: AngularFirestore) {
    this.db = db;
    this.userCollectionRef = db.collection<User>('raspbperryPi');
    this.docRef = db.collection('raspbperryPi').doc("Sensores");    

    this.userCollectionRef.snapshotChanges().subscribe( data =>{
  	if (data) {
  		this.items = data.map( item =>{
        const data = item.payload.doc.data() as User;
        data.id = item.payload.doc.id;
        this.chart.data.labels.push(data.Seconds);  
        this.chart.data.datasets.forEach((dataset) => {
          this.chart.data.datasets[0].data.push(data.Temperatura);
          this.chart.data.datasets[1].data.push(data.Humedad);

        });

				this.chart.update();
        return data;
      });
  	}
   }, 
   err => console.log('Error ' + err),
   () => console.log('yay'))

  }


  ngOnInit() {
  
    this.chart = new Chart('realtime', {
      type: 'line',
    data: {
     labels:[],
     datasets: [{
         label: 'Temperatura',
         data: [],
         fill:false,
         lineTension:0.2,
         borderColor:"red",
         borderWidth: 1
     },
      { 
        label: 'Humedad',
        data: [],
        fill:false,
        lineTension:0.2,
        borderColor:"blue",
        borderWidth: 1               
      }
    
    ]
    }, 
    options: {
     title:{
         text:"GRAPH",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });
    
      
  }

  }
  

