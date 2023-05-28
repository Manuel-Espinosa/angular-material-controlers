import { Component } from '@angular/core';
import {
  SlideToggleConfigurableExample,
  SlideToggleFormsExample,
  SlideToggleOverviewExample,
  SlideToggleHarnessExample
} from '../index'

@Component({
  selector: 'app-slide-toggle-view',
  templateUrl: './slide-toggle-view.component.html',
  styleUrls: ['./slide-toggle-view.component.css'],
  standalone:true,
  imports:[
    SlideToggleConfigurableExample,
    SlideToggleFormsExample,
    SlideToggleOverviewExample,
    SlideToggleHarnessExample
  ]
})
export class SlideToggleViewComponent {

}
