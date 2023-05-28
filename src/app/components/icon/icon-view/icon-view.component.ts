import { Component } from '@angular/core';
import {
  IconOverviewExample,
  IconSvgExample,
  IconHarnessExample
} from '../index'

@Component({
  selector: 'app-icon-view',
  templateUrl: './icon-view.component.html',
  styleUrls: ['./icon-view.component.css'],
  standalone:true,
  imports:[
    IconOverviewExample,
    IconSvgExample,
    IconHarnessExample
  ]
})
export class IconViewComponent {

}
