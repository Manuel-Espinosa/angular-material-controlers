import { Component } from '@angular/core';
import {
  ProgressSpinnerConfigurableExample,
  ProgressSpinnerOverviewExample,
  ProgressSpinnerHarnessExample
} from '../index'
@Component({
  selector: 'app-progress-spinner-view',
  templateUrl: './progress-spinner-view.component.html',
  styleUrls: ['./progress-spinner-view.component.css'],
  standalone:true,
  imports:[
    ProgressSpinnerConfigurableExample,
    ProgressSpinnerOverviewExample,
    ProgressSpinnerHarnessExample
  ]
})
export class ProgressSpinnerViewComponent {

}
