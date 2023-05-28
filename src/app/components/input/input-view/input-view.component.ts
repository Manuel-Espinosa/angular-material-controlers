import { Component } from '@angular/core';
import {
  InputClearableExample,
  InputErrorStateMatcherExample,
  InputErrorsExample,
  InputFormExample,
  InputHintExample,
  InputOverviewExample,
  InputPrefixSuffixExample,
  InputHarnessExample,
} from '../index'

@Component({
  selector: 'app-input-view',
  templateUrl: './input-view.component.html',
  styleUrls: ['./input-view.component.css'],
  standalone:true,
  imports:[
    InputClearableExample,
    InputErrorStateMatcherExample,
    InputErrorsExample,
    InputFormExample,
    InputHintExample,
    InputOverviewExample,
    InputPrefixSuffixExample,
    InputHarnessExample,
  ]
})
export class InputViewComponent {

}
