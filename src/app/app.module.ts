import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AutocompleteViewComponent } from './components/components-views/autocomplete-view/autocomplete-view.component';
import { BadgeViewComponent } from './components/components-views/badge-view/badge-view.component';
import { BottomSheetViewComponent } from './components/components-views/bottom-sheet-view/bottom-sheet-view.component';
import { ButtonViewComponent } from './components/components-views/button-view/button-view.component';
import { ButtonToggleViewComponent } from './components/components-views/button-toggle-view/button-toggle-view.component';
import { CardViewComponent } from './components/components-views/card-view/card-view.component';
import { CheckboxViewComponent } from './components/components-views/checkbox-view/checkbox-view.component';
import { ChipsViewComponent } from './components/components-views/chips-view/chips-view.component';
import { CoreViewComponent } from './components/components-views/core-view/core-view.component';
import { DatepickerViewComponent } from './components/components-views/datepicker-view/datepicker-view.component';
import { DialogViewComponent } from './components/components-views/dialog-view/dialog-view.component';
import { DividerViewComponent } from './components/components-views/divider-view/divider-view.component';
import { ExpansionPanelViewComponent } from './components/components-views/expansion-panel-view/expansion-panel-view.component';
import { FormFieldViewComponent } from './components/components-views/form-field-view/form-field-view.component';
import { GridListViewComponent } from './components/components-views/grid-list-view/grid-list-view.component';
import { IconViewComponent } from './components/components-views/icon-view/icon-view.component';
import { InputViewComponent } from './components/components-views/input-view/input-view.component';
import { ListViewComponent } from './components/components-views/list-view/list-view.component';
import { MenuViewComponent } from './components/components-views/menu-view/menu-view.component';
import { PaginatorViewComponent } from './components/components-views/paginator-view/paginator-view.component';
import { ProgressBarViewComponent } from './components/components-views/progress-bar-view/progress-bar-view.component';
import { ProgressSpinnerViewComponent } from './components/components-views/progress-spinner-view/progress-spinner-view.component';
import { RadioButtonViewComponent } from './components/components-views/radio-button-view/radio-button-view.component';
import { RipplesViewComponent } from './components/components-views/ripples-view/ripples-view.component';
import { SelectViewComponent } from './components/components-views/select-view/select-view.component';
import { SidenavViewComponent } from './components/components-views/sidenav-view/sidenav-view.component';
import { SlideToggleViewComponent } from './components/components-views/slide-toggle-view/slide-toggle-view.component';
import { SliderViewComponent } from './components/components-views/slider-view/slider-view.component';
import { SnackbarViewComponent } from './components/components-views/snackbar-view/snackbar-view.component';
import { SortHeaderViewComponent } from './components/components-views/sort-header-view/sort-header-view.component';
import { StepperViewComponent } from './components/components-views/stepper-view/stepper-view.component';
import { TableViewComponent } from './components/components-views/table-view/table-view.component';
import { TabsViewComponent } from './components/components-views/tabs-view/tabs-view.component';
import { ToolbarViewComponent } from './components/components-views/toolbar-view/toolbar-view.component';
import { TooltipViewComponent } from './components/components-views/tooltip-view/tooltip-view.component';
import { TreeViewComponent } from './components/components-views/tree-view/tree-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    AutocompleteViewComponent,
    BadgeViewComponent,
    BottomSheetViewComponent,
    ButtonViewComponent,
    ButtonToggleViewComponent,
    CardViewComponent,
    CheckboxViewComponent,
    ChipsViewComponent,
    CoreViewComponent,
    DatepickerViewComponent,
    DialogViewComponent,
    DividerViewComponent,
    ExpansionPanelViewComponent,
    FormFieldViewComponent,
    GridListViewComponent,
    IconViewComponent,
    InputViewComponent,
    ListViewComponent,
    MenuViewComponent,
    PaginatorViewComponent,
    ProgressBarViewComponent,
    ProgressSpinnerViewComponent,
    RadioButtonViewComponent,
    RipplesViewComponent,
    SelectViewComponent,
    SidenavViewComponent,
    SlideToggleViewComponent,
    SliderViewComponent,
    SnackbarViewComponent,
    SortHeaderViewComponent,
    StepperViewComponent,
    TableViewComponent,
    TabsViewComponent,
    ToolbarViewComponent,
    TooltipViewComponent,
    TreeViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
