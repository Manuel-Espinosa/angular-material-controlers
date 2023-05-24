import { Component } from '@angular/core';
import { AutocompleteSimpleExample } from '../autocomplete-simple/autocomplete-simple-example';
import { AutocompleteAutoActiveFirstOptionExample } from '../autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example';
import { AutocompleteDisplayExample } from '../autocomplete-display/autocomplete-display-example';
import { AutocompleteFilterExample } from '../autocomplete-filter/autocomplete-filter-example';
import { AutocompleteHarnessExample } from '../autocomplete-harness/autocomplete-harness-example';
import { AutocompleteOptgroupExample } from '../autocomplete-optgroup/autocomplete-optgroup-example';
import { AutocompleteOverviewExample } from '../autocomplete-overview/autocomplete-overview-example';
import { AutocompletePlainInputExample } from '../autocomplete-plain-input/autocomplete-plain-input-example';

@Component({
  selector: 'app-autocomplete-view',
  templateUrl: './autocomplete-view.component.html',
  styleUrls: ['./autocomplete-view.component.css'],
  standalone: true,
  imports: [
    AutocompleteSimpleExample,
    AutocompleteAutoActiveFirstOptionExample,
    AutocompleteDisplayExample,
    AutocompleteFilterExample,
    AutocompleteHarnessExample,
    AutocompleteOptgroupExample,
    AutocompleteOverviewExample,
    AutocompletePlainInputExample
  ],
})
export class AutocompleteViewComponent {}
