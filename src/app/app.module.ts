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



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    
  ],
  imports: [
    AutocompleteViewComponent,
    BottomSheetViewComponent,
    ButtonViewComponent,
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
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }