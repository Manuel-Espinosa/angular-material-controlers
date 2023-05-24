import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeViewComponent } from './components/badge/badge-view/badge-view.component';
import { AutocompleteViewComponent } from './components/autocomplete/autocomplete-view/autocomplete-view.component';
const routes: Routes = [
  { path: 'badge', component:BadgeViewComponent},
  { path: 'autocomplete', component:AutocompleteViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
