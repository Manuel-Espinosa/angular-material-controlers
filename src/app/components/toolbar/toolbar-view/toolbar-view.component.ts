import { Component } from '@angular/core';
import {
  ToolbarBasicExample,
  ToolbarMultirowExample,
  ToolbarOverviewExample,
  ToolbarHarnessExample
} from '../index'

@Component({
  selector: 'app-toolbar-view',
  templateUrl: './toolbar-view.component.html',
  styleUrls: ['./toolbar-view.component.css'],
  standalone:true,
  imports:[
    ToolbarBasicExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
    ToolbarHarnessExample
  ]
})
export class ToolbarViewComponent {

}
