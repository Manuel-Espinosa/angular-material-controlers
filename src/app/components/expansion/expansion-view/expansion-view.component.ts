import { Component } from '@angular/core';
import {
  ExpansionExpandCollapseAllExample,
  ExpansionOverviewExample,
  ExpansionStepsExample,
  ExpansionHarnessExample,
} from '../index'

@Component({
  selector: 'app-expansion-view',
  templateUrl: './expansion-view.component.html',
  styleUrls: ['./expansion-view.component.css'],
  standalone:true,
  imports:[
    ExpansionExpandCollapseAllExample,
    ExpansionOverviewExample,
    ExpansionStepsExample,
    ExpansionHarnessExample,
  ]
})
export class ExpansionViewComponent {

}
