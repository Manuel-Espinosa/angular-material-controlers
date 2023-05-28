import { Component } from '@angular/core';
import { CardActionsExample } from '../card-actions/card-actions-example';
import { CardFancyExample } from '../card-fancy/card-fancy-example';
import { CardFooterExample } from '../card-footer/card-footer-example';
import { CardHarnessExample } from '../card-harness/card-harness-example';
import { CardMediaSizeExample } from '../card-media-size/card-media-size-example';
import { CardOverviewExample } from '../card-overview/card-overview-example';
import { CardSubtitleExample } from '../card-subtitle/card-subtitle-example';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css'],
  standalone:true,
  imports:[CardActionsExample,CardFancyExample,CardFooterExample,CardHarnessExample,CardMediaSizeExample,CardOverviewExample,CardSubtitleExample]
})
export class CardViewComponent {

}
