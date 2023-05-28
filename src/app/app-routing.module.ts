import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BadgeViewComponent } from './components/badge/badge-view/badge-view.component';
import { AutocompleteViewComponent } from './components/autocomplete/autocomplete-view/autocomplete-view.component';
import { BottomSheetViewComponent } from './components/bottom-sheet/bottom-sheet-view/bottom-sheet-view.component';
import { ButtonViewComponent } from './components/button/button-view/button-view.component';
import { ButtonToggleViewComponent } from './components/button-toggle/button-toggle-view/button-toggle-view.component';
import { CardViewComponent } from './components/card/card-view/card-view.component';
import { CheckboxViewComponent } from './components/checkbox/checkbox-view/checkbox-view.component';
import { ChipsViewComponent } from './components/chips/chips-view/chips-view.component';
import { DatepickerViewComponent } from './components/datepicker/datepicker-view/datepicker-view.component';
import { DialogViewComponent } from './components/dialog/dialog-view/dialog-view.component';
import { DividerViewComponent } from './components/divider/divider-view/divider-view.component';
import { ExpansionViewComponent } from './components/expansion/expansion-view/expansion-view.component';
import { FormFieldViewComponent } from './components/form-field/form-field-view/form-field-view.component';
import { GridListViewComponent } from './components/grid-list/grid-list-view/grid-list-view.component';
import { IconViewComponent } from './components/icon/icon-view/icon-view.component';
import { InputViewComponent } from './components/input/input-view/input-view.component';
import { ListViewComponent } from './components/list/list-view/list-view.component';
import { MenuViewComponent } from './components/menu/menu-view/menu-view.component';
import { PaginatorViewComponent } from './components/paginator/paginator-view/paginator-view.component';
import { ProgressBarViewComponent } from './components/progress-bar/progress-bar-view/progress-bar-view.component';
import { ProgressSpinnerViewComponent } from './components/progress-spinner/progress-spinner-view/progress-spinner-view.component';
import { RadioViewComponent } from './components/radio/radio-view/radio-view.component';
import { SelectViewComponent } from './components/select/select-view/select-view.component';
import { SidenavViewComponent } from './components/sidenav/sidenav-view/sidenav-view.component';
import { SlideToggleViewComponent } from './components/slide-toggle/slide-toggle-view/slide-toggle-view.component';
import { SliderViewComponent } from './components/slider/slider-view/slider-view.component';
import { SnackBarViewComponent } from './components/snack-bar/snack-bar-view/snack-bar-view.component';
import { SortViewComponent } from './components/sort/sort-view/sort-view.component';
import { StepperViewComponent } from './components/stepper/stepper-view/stepper-view.component';
import { TableViewComponent } from './components/table/table-view/table-view.component';
import { TabsViewComponent } from './components/tabs/tabs-view/tabs-view.component';
import { ToolbarViewComponent } from './components/toolbar/toolbar-view/toolbar-view.component';
import { TooltipViewComponent } from './components/tooltip/tooltip-view/tooltip-view.component';
import { TreeViewComponent } from './components/tree/tree-view/tree-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'autocomplete', pathMatch: 'full' },
  { path: 'badge', component: BadgeViewComponent },
  { path: 'autocomplete', component: AutocompleteViewComponent },
  { path: 'bottom-sheet', component: BottomSheetViewComponent },
  { path: 'button', component: ButtonViewComponent },
  { path: 'button-toggle', component: ButtonToggleViewComponent },
  { path: 'card', component: CardViewComponent },
  { path: 'checkbox', component: CheckboxViewComponent },
  { path: 'chips', component: ChipsViewComponent },
  { path: 'datepicker', component: DatepickerViewComponent },
  { path: 'dialog', component: DialogViewComponent },
  { path: 'divider', component: DividerViewComponent },
  { path: 'expansion-panel', component: ExpansionViewComponent },
  { path: 'form-field', component: FormFieldViewComponent },
  { path: 'grid-list', component: GridListViewComponent },
  { path: 'icon', component: IconViewComponent },
  { path: 'input', component: InputViewComponent },
  { path: 'list', component: ListViewComponent },
  { path: 'menu', component: MenuViewComponent },
  { path: 'paginator', component: PaginatorViewComponent },
  { path: 'progress-bar', component: ProgressBarViewComponent },
  { path: 'progress-spinner', component: ProgressSpinnerViewComponent },
  { path: 'radio-button', component: RadioViewComponent },
  { path: 'select', component: SelectViewComponent },
  { path: 'sidenav', component: SidenavViewComponent },
  { path: 'slide-toggle', component: SlideToggleViewComponent },
  { path: 'slider', component: SliderViewComponent },
  { path: 'snackbar', component: SnackBarViewComponent },
  { path: 'sort-header', component: SortViewComponent },
  { path: 'stepper', component: StepperViewComponent },
  { path: 'table', component: TableViewComponent },
  { path: 'tabs', component: TabsViewComponent },
  { path: 'toolbar', component: ToolbarViewComponent },
  { path: 'tooltip', component: TooltipViewComponent },
  { path: 'tree', component: TreeViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
