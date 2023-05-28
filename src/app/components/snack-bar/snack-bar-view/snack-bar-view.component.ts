import { Component } from '@angular/core';
import {
  PizzaPartyComponent,
  SnackBarComponentExample,
  PizzaPartyAnnotatedComponent,
  SnackBarAnnotatedComponentExample,
  SnackBarOverviewExample,
  SnackBarPositionExample,
  SnackBarHarnessExample
} from '../index'

@Component({
  selector: 'app-snack-bar-view',
  templateUrl: './snack-bar-view.component.html',
  styleUrls: ['./snack-bar-view.component.css'],
  standalone:true,
  imports:[
    PizzaPartyComponent,
    SnackBarComponentExample,
    PizzaPartyAnnotatedComponent,
    SnackBarAnnotatedComponentExample,
    SnackBarOverviewExample,
    SnackBarPositionExample,
    SnackBarHarnessExample
  ]
})
export class SnackBarViewComponent {

}
