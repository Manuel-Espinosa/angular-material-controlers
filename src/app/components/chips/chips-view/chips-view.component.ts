import { Component } from '@angular/core';
import { ChipsAutocompleteExample } from '../chips-autocomplete/chips-autocomplete-example';
import { ChipsAvatarExample } from '../chips-avatar/chips-avatar-example';
import { ChipsDragDropExample } from '../chips-drag-drop/chips-drag-drop-example';
import { ChipsHarnessExample } from '../chips-harness/chips-harness-example';
import { ChipsInputExample } from '../chips-input/chips-input-example';
import {ChipsOverviewExample} from '../chips-overview/chips-overview-example';
import { ChipsStackedExample } from '../chips-stacked/chips-stacked-example';
import { ChipsFormControlExample } from '../chips-form-control/chips-form-control-example';

@Component({
  selector: 'app-chips-view',
  templateUrl: './chips-view.component.html',
  styleUrls: ['./chips-view.component.css'],
  standalone:true,
  imports:[ChipsFormControlExample,ChipsAutocompleteExample,ChipsAvatarExample,ChipsDragDropExample,ChipsHarnessExample,ChipsInputExample,ChipsOverviewExample,ChipsStackedExample]
})
export class ChipsViewComponent {

}
