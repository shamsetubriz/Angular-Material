import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { Tab1ContentComponent } from './tab1-content/tab1-content.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3ContentComponent } from './tab3-content/tab3-content.component';
import { Tab4ContentComponent } from './tab4-content/tab4-content.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    Tab1ContentComponent,
    Tab2Component,
    Tab3ContentComponent,
    Tab4ContentComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatTabsModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

