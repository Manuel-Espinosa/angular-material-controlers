import { Component } from '@angular/core';
import {
  ProgressBarBufferExample,
  ProgressBarConfigurableExample,
  ProgressBarDeterminateExample,
  ProgressBarIndeterminateExample,
  ProgressBarQueryExample,
  ProgressBarHarnessExample
} from '../index'

@Component({
  selector: 'app-progress-bar-view',
  templateUrl: './progress-bar-view.component.html',
  styleUrls: ['./progress-bar-view.component.css'],
  standalone:true,
  imports:[
    ProgressBarBufferExample,
    ProgressBarConfigurableExample,
    ProgressBarDeterminateExample,
    ProgressBarIndeterminateExample,
    ProgressBarQueryExample,
    ProgressBarHarnessExample
  ]
})
export class ProgressBarViewComponent {

}
