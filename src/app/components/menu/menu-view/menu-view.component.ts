import { Component } from '@angular/core';
import {
  MenuIconsExample,
  MenuOverviewExample,
  MenuPositionExample,
  MenuNestedExample,
  MenuHarnessExample
} from '../index'

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css'],
  standalone: true,
  imports:[
    MenuIconsExample,
    MenuOverviewExample,
    MenuPositionExample,
    MenuNestedExample,
    MenuHarnessExample
  ]
})
export class MenuViewComponent {

}
