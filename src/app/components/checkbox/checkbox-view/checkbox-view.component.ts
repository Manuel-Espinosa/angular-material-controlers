import { Component } from '@angular/core';
import { CheckboxConfigurableExample } from '../checkbox-configurable/checkbox-configurable-example';
import { CheckboxHarnessExample } from '../checkbox-harness/checkbox-harness-example';
import { CheckboxOverviewExample } from '../checkbox-overview/checkbox-overview-example';
import { CheckboxReactiveFormsExample } from '../checkbox-reactive-forms/checkbox-reactive-forms-example';


@Component({
  selector: 'app-checkbox-view',
  templateUrl: './checkbox-view.component.html',
  styleUrls: ['./checkbox-view.component.css'],
  standalone:true,
  imports:[CheckboxConfigurableExample,CheckboxHarnessExample,CheckboxOverviewExample,CheckboxReactiveFormsExample]
})
export class CheckboxViewComponent {

}
