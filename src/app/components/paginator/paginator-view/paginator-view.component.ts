import { Component } from '@angular/core';
import {
  PaginatorConfigurableExample,
  PaginatorOverviewExample,
  PaginatorHarnessExample,
  PaginatorIntlExample
} from '../index'


@Component({
  selector: 'app-paginator-view',
  templateUrl: './paginator-view.component.html',
  styleUrls: ['./paginator-view.component.css'],
  standalone:true,
  imports:[
    PaginatorConfigurableExample,
    PaginatorOverviewExample,
    PaginatorHarnessExample,
    PaginatorIntlExample
  ]
})
export class PaginatorViewComponent {

}
