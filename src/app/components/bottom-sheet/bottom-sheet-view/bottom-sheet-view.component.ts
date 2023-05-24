import { Component } from '@angular/core';
import { BottomSheetHarnessExample } from '../bottom-sheet-harness/bottom-sheet-harness-example';
import { BottomSheetOverviewExample } from '../bottom-sheet-overview/bottom-sheet-overview-example';
@Component({
  selector: 'app-bottom-sheet-view',
  templateUrl: './bottom-sheet-view.component.html',
  styleUrls: ['./bottom-sheet-view.component.css'],
  standalone:true,
  imports:[BottomSheetHarnessExample,BottomSheetOverviewExample]
})
export class BottomSheetViewComponent {

}
