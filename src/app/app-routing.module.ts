import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeViewComponent } from './components/badge/badge-view/badge-view.component';
import { AutocompleteViewComponent } from './components/autocomplete/autocomplete-view/autocomplete-view.component';
import { BottomSheetViewComponent } from './components/bottom-sheet/bottom-sheet-view/bottom-sheet-view.component';
import { ButtonViewComponent } from './components/button/button-view/button-view.component';

const routes: Routes = [
  { path: 'badge', component:BadgeViewComponent},
  { path: 'autocomplete', component:AutocompleteViewComponent},
  { path: 'bottom-sheet', component:BottomSheetViewComponent},
  { path: 'button', component:ButtonViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
