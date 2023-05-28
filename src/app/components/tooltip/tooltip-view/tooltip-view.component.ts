import { Component } from '@angular/core';
import {
  TooltipAutoHideExample,
  TooltipCustomClassExample,
  TooltipDelayExample,
  TooltipDisabledExample,
  TooltipManualExample,
  TooltipMessageExample,
  TooltipModifiedDefaultsExample,
  TooltipOverviewExample,
  TooltipPositionExample,
  TooltipPositionAtOriginExample,
  TooltipHarnessExample,
} from '../index'

@Component({
  selector: 'app-tooltip-view',
  templateUrl: './tooltip-view.component.html',
  styleUrls: ['./tooltip-view.component.css'],
  standalone:true,
  imports: [
    TooltipAutoHideExample,
    TooltipCustomClassExample,
    TooltipDelayExample,
    TooltipDisabledExample,
    TooltipManualExample,
    TooltipMessageExample,
    TooltipModifiedDefaultsExample,
    TooltipOverviewExample,
    TooltipPositionExample,
    TooltipPositionAtOriginExample,
    TooltipHarnessExample,
  ]
  
})
export class TooltipViewComponent {

}
