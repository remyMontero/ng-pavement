import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WorksListComponent} from './works/works-list-component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    WorksListComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
