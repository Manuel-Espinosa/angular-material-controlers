import { Component } from '@angular/core';
import {
  DividerOverviewExample,
  DividerHarnessExample,
} from '../index'

@Component({
  selector: 'app-divider-view',
  templateUrl: './divider-view.component.html',
  styleUrls: ['./divider-view.component.css'],
  standalone: true,
  imports:[
    DividerOverviewExample,
    DividerHarnessExample,
  ]
})
export class DividerViewComponent {

}
