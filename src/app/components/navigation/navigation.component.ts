import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { componentNames } from 'src/app/utils/component.names';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);
  componentNames: string[] = componentNames; // Assign the componentNames array to a property

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    generateHref(componentName: string): string {
      // Replace spaces with hyphens
      const modifiedName = componentName.replace(/ /g, '-').toLowerCase();
  
      // Append "-view" at the end
      const href = modifiedName;
  
      return href;
    }
}