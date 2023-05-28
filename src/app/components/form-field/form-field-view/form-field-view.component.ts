import { Component } from '@angular/core';
import {
  FormFieldAppearanceExample,
  FormFieldCustomControlExample,
  FormFieldErrorExample,
  FormFieldHintExample,
  FormFieldLabelExample,
  FormFieldOverviewExample,
  FormFieldPrefixSuffixExample,
  FormFieldThemingExample,
  FormFieldHarnessExample,
} from '../index'

const EXAMPLE_COMPONENTS = [
  FormFieldAppearanceExample,
  FormFieldCustomControlExample,
  FormFieldErrorExample,
  FormFieldHintExample,
  FormFieldLabelExample,
  FormFieldOverviewExample,
  FormFieldPrefixSuffixExample,
  FormFieldThemingExample,
  FormFieldHarnessExample,
];

@Component({
  selector: 'app-form-field-view',
  templateUrl: './form-field-view.component.html',
  styleUrls: ['./form-field-view.component.css'],
  standalone:true,
  imports:[EXAMPLE_COMPONENTS]
})
export class FormFieldViewComponent {
  exampleComponents = EXAMPLE_COMPONENTS;
}
