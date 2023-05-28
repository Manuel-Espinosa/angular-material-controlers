import { Component } from '@angular/core';
import {
  RadioNgModelExample,
  RadioOverviewExample,
  RadioHarnessExample
} from '../index'

@Component({
  selector: 'app-radio-view',
  templateUrl: './radio-view.component.html',
  styleUrls: ['./radio-view.component.css'],
  standalone:true,
  imports:[
    RadioNgModelExample,
    RadioOverviewExample,
    RadioHarnessExample
  ]
})
export class RadioViewComponent {

}
