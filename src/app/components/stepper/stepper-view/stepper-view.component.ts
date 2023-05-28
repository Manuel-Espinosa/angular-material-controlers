import { Component } from '@angular/core';
import {
  StepperEditableExample,
  StepperErrorsExample,
  StepperLabelPositionBottomExample,
  StepperOptionalExample,
  StepperOverviewExample,
  StepperStatesExample,
  StepperVerticalExample,
  StepperHarnessExample,
  StepperIntlExample,
  StepperLazyContentExample,
  StepperResponsiveExample,
  StepperHeaderPositionExample,
  StepperAnimationsExample
} from '../index';


@Component({
  selector: 'app-stepper-view',
  templateUrl: './stepper-view.component.html',
  styleUrls: ['./stepper-view.component.css'],
  standalone:true,
  imports:[
    StepperEditableExample,
    StepperErrorsExample,
    StepperLabelPositionBottomExample,
    StepperOptionalExample,
    StepperOverviewExample,
    StepperStatesExample,
    StepperVerticalExample,
    StepperHarnessExample,
    StepperIntlExample,
    StepperLazyContentExample,
    StepperResponsiveExample,
    StepperHeaderPositionExample,
    StepperAnimationsExample
  ]
})
export class StepperViewComponent {

}
