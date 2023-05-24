import { Component } from '@angular/core';
import { ButtonHarnessExample } from '../button-harness/button-harness-example';
import { ButtonOverviewExample } from '../button-overview/button-overview-example';
import { ButtonTypesExample } from '../button-types/button-types-example';

@Component({
  selector: 'app-button-view',
  templateUrl: './button-view.component.html',
  styleUrls: ['./button-view.component.css'],
  standalone:true,
  imports:[ButtonHarnessExample,ButtonOverviewExample,ButtonTypesExample]
})
export class ButtonViewComponent {

}
