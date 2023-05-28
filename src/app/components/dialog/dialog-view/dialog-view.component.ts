import { Component } from '@angular/core';
import{
  DialogContentExample,
  DialogContentExampleDialog,
  DialogDataExample,
  DialogDataExampleDialog,
  DialogElementsExample,
  DialogElementsExampleDialog,
  DialogOverviewExample,
  DialogOverviewExampleDialog,
  DialogFromMenuExample,
  DialogFromMenuExampleDialog,
  DialogHarnessExample,
  DialogAnimationsExample,
  DialogAnimationsExampleDialog
} from '../index'


@Component({
  selector: 'app-dialog-view',
  templateUrl: './dialog-view.component.html',
  styleUrls: ['./dialog-view.component.css'],
  standalone: true,
  imports:[
    DialogContentExample,
    DialogContentExampleDialog,
    DialogDataExample,
    DialogDataExampleDialog,
    DialogElementsExample,
    DialogElementsExampleDialog,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
    DialogFromMenuExample,
    DialogFromMenuExampleDialog,
    DialogHarnessExample,
    DialogAnimationsExample,
    DialogAnimationsExampleDialog
  ]
})
export class DialogViewComponent {

}
