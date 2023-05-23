import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { componentNames } from './utils/component.names';

const routes: Routes = [
  ...componentNames.map((componentName: string) => ({
    path: generateHref(componentName),
    component: generateComponentName(componentName),
  })),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// Helper function to generate the href
function generateHref(componentName: string): string {
  const modifiedName = componentName.replace(/ /g, '-').toLowerCase();
  return modifiedName + '-view';
}

// Helper function to generate the component name in camelCase with 'View' appended
function generateComponentName(componentName: string): any {
  const modifiedName = componentName.replace(/ /g, '');
  modifiedName + 'ViewComponent';
  import(`./components/components-views/${modifiedName}`).then(
    (module) => module[modifiedName]
  );
}
