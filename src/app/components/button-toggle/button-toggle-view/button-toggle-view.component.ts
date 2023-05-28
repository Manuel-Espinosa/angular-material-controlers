import { Component } from '@angular/core';
import { ButtonToggleAppearanceExample } from '../button-toggle-appearance/button-toggle-appearance-example';
import { ButtonToggleExclusiveExample } from '../button-toggle-exclusive/button-toggle-exclusive-example';
import { ButtonToggleFormsExample } from '../button-toggle-forms/button-toggle-forms-example';
import { ButtonToggleModeExample } from '../button-toggle-mode/button-toggle-mode-example';
import { ButtonToggleHarnessExample } from '../button-toggle-harness/button-toggle-harness-example';
import { ButtonToggleOverviewExample } from '../button-toggle-overview/button-toggle-overview-example';

@Component({
  selector: 'app-button-toggle-view',
  templateUrl: './button-toggle-view.component.html',
  styleUrls: ['./button-toggle-view.component.css'],
  standalone: true,
  imports: [
    ButtonToggleHarnessExample,
    ButtonToggleOverviewExample,
    ButtonToggleAppearanceExample,
    ButtonToggleExclusiveExample,
    ButtonToggleFormsExample,
    ButtonToggleModeExample,
  ],
})
export class ButtonToggleViewComponent {}
