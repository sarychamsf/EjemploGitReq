import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ChartsModule } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets,Chart } from 'chart.js';
import { Label } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { Feed } from './model/feed';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto-vinos';
}
