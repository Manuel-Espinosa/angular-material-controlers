import { Component } from '@angular/core';
import {
  ListOverviewExample,
  ListSectionsExample,
  ListSelectionExample,
  ListSingleSelectionExample,
  ListHarnessExample,
  ListVariantsExample,
} from '../index'

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  standalone:true,
  imports:[
    ListOverviewExample,
    ListSectionsExample,
    ListSelectionExample,
    ListSingleSelectionExample,
    ListHarnessExample,
    ListVariantsExample,
  ]
})
export class ListViewComponent {

}
