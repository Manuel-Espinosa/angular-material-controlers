import { Component } from '@angular/core';
import {
  TreeChecklistExample,
  TreeDynamicExample,
  TreeFlatOverviewExample,
  TreeHarnessExample,
  TreeLoadmoreExample,
  TreeNestedOverviewExample
} from '../index'

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
  standalone:true,
  imports:[
    TreeChecklistExample,
    TreeDynamicExample,
    TreeFlatOverviewExample,
    TreeHarnessExample,
    TreeLoadmoreExample,
    TreeNestedOverviewExample
  ]

})
export class TreeViewComponent {

}
