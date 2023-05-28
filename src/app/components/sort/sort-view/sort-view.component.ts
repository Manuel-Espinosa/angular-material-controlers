import { Component } from '@angular/core';
import{
  SortOverviewExample,
  SortHarnessExample
} from '../index'

@Component({
  selector: 'app-sort-view',
  templateUrl: './sort-view.component.html',
  styleUrls: ['./sort-view.component.css'],
  standalone:true,
  imports:[
    SortOverviewExample,
    SortHarnessExample
  ]
})
export class SortViewComponent {

}
