import { Component } from '@angular/core';
import {
  SidenavAutosizeExample,
  SidenavBackdropExample,
  SidenavDisableCloseExample,
  SidenavDrawerOverviewExample,
  SidenavFixedExample,
  SidenavModeExample,
  SidenavOpenCloseExample,
  SidenavOverviewExample,
  SidenavPositionExample,
  SidenavResponsiveExample,
  SidenavHarnessExample
} from '../index'

@Component({
  selector: 'app-sidenav-view',
  templateUrl: './sidenav-view.component.html',
  styleUrls: ['./sidenav-view.component.css'],
  standalone:true,
  imports:[
    SidenavAutosizeExample,
    SidenavBackdropExample,
    SidenavDisableCloseExample,
    SidenavDrawerOverviewExample,
    SidenavFixedExample,
    SidenavModeExample,
    SidenavOpenCloseExample,
    SidenavOverviewExample,
    SidenavPositionExample,
    SidenavResponsiveExample,
    SidenavHarnessExample
  ]
})
export class SidenavViewComponent {

}
