import { Component } from '@angular/core';
import {
  SliderConfigurableExample,
  SliderFormattingExample,
  SliderOverviewExample,
  SliderHarnessExample,
  SliderRangeExample
} from '../index'

@Component({
  selector: 'app-slider-view',
  templateUrl: './slider-view.component.html',
  styleUrls: ['./slider-view.component.css'],
  standalone:true,
  imports:[
    SliderConfigurableExample,
    SliderFormattingExample,
    SliderOverviewExample,
    SliderHarnessExample,
    SliderRangeExample
  ]
})
export class SliderViewComponent {

}
