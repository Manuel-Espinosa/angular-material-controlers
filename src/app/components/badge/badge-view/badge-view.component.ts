import { Component } from '@angular/core';
import { BadgeHarnessExample } from '../badge-harness/badge-harness-example';
import { BadgeOverviewExample } from '../badge-overview/badge-overview-example';
@Component({
  selector: 'app-badge-view',
  templateUrl: './badge-view.component.html',
  styleUrls: ['./badge-view.component.css'],
  standalone:true,
  imports:[BadgeHarnessExample,BadgeOverviewExample]
})
export class BadgeViewComponent {

}
