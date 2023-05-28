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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
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
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    
  ],
  imports: [
    AutocompleteViewComponent,
    BottomSheetViewComponent,
    ButtonViewComponent,
    ButtonToggleViewComponent,
    CardViewComponent,
    CheckboxViewComponent,
    ChipsViewComponent,
    DatepickerViewComponent,
    DialogViewComponent,
    DividerViewComponent,
    GridListViewComponent,
    ExpansionViewComponent,
    FormFieldViewComponent,
    IconViewComponent,
    InputViewComponent,
    ListViewComponent,
    MenuViewComponent,
    PaginatorViewComponent,
    ProgressBarViewComponent,
    ProgressSpinnerViewComponent,
    RadioViewComponent,
    SelectViewComponent,
    SidenavViewComponent,
    SliderViewComponent,
    SlideToggleViewComponent,
    SnackBarViewComponent,
    SortViewComponent,
    StepperViewComponent,
    TableViewComponent,
    TabsViewComponent,
    ToolbarViewComponent,
    TooltipViewComponent,
    TreeViewComponent,
    BrowserModule,
    BadgeViewComponent,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }