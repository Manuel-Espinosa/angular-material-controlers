import { Component } from '@angular/core';
import {
    TabGroupAlignExample,
    TabGroupAnimationsExample,
    TabGroupAsyncExample,
    TabGroupBasicExample,
    TabGroupCustomLabelExample,
    TabGroupDynamicHeightExample,
    TabGroupHarnessExample,
    TabGroupDynamicExample,
    TabGroupHeaderBelowExample,
    TabGroupLazyLoadedExample,
    TabGroupPreserveContentExample,
    TabGroupStretchedExample,
    TabGroupThemeExample,
    TabNavBarBasicExample,
    TabGroupPaginatedExample,
    TabGroupInvertedExample,
    TabGroupInkBarExample  
} from '../index'

@Component({
  selector: 'app-tabs-view',
  templateUrl: './tabs-view.component.html',
  styleUrls: ['./tabs-view.component.css'],
  standalone:true,
  imports: [
    TabGroupAlignExample,
    TabGroupAnimationsExample,
    TabGroupAsyncExample,
    TabGroupBasicExample,
    TabGroupCustomLabelExample,
    TabGroupDynamicHeightExample,
    TabGroupHarnessExample,
    TabGroupDynamicExample,
    TabGroupHeaderBelowExample,
    TabGroupLazyLoadedExample,
    TabGroupPreserveContentExample,
    TabGroupStretchedExample,
    TabGroupThemeExample,
    TabNavBarBasicExample,
    TabGroupPaginatedExample,
    TabGroupInvertedExample,
    TabGroupInkBarExample
  ]
  
})
export class TabsViewComponent {

}
