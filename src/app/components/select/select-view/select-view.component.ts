import { Component } from '@angular/core';
import {
  SelectCustomTriggerExample,
  SelectDisabledExample,
  SelectErrorStateMatcherExample,
  SelectFormExample,
  SelectHintErrorExample,
  SelectMultipleExample,
  SelectNoRippleExample,
  SelectOptgroupExample,
  SelectOverviewExample,
  SelectPanelClassExample,
  SelectResetExample,
  SelectValueBindingExample,
  SelectReactiveFormExample,
  SelectInitialValueExample,
  SelectHarnessExample
} from '../index'

@Component({
  selector: 'app-select-view',
  templateUrl: './select-view.component.html',
  styleUrls: ['./select-view.component.css'],
  standalone: true,
  imports:[
    SelectCustomTriggerExample,
    SelectDisabledExample,
    SelectErrorStateMatcherExample,
    SelectFormExample,
    SelectHintErrorExample,
    SelectMultipleExample,
    SelectNoRippleExample,
    SelectOptgroupExample,
    SelectOverviewExample,
    SelectPanelClassExample,
    SelectResetExample,
    SelectValueBindingExample,
    SelectReactiveFormExample,
    SelectInitialValueExample,
    SelectHarnessExample
  ]
})
export class SelectViewComponent {

}
