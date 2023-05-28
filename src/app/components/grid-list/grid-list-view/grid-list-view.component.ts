import { Component } from '@angular/core';
import {
  GridListDynamicExample,
  GridListOverviewExample,
  GridListHarnessExample
} from '../index'

@Component({
  selector: 'app-grid-list-view',
  templateUrl: './grid-list-view.component.html',
  styleUrls: ['./grid-list-view.component.css'],
  standalone:true,
  imports:[
    GridListDynamicExample,
    GridListOverviewExample,
    GridListHarnessExample
  ]
})
export class GridListViewComponent {

}
