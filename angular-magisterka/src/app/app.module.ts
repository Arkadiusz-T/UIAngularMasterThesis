import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoBar } from './components/InfoBar.component';
import { SelectDBMS } from './components/selectBdmsType.component';
import { SelectTextLength } from './components/selectTextLength.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoBar,
    SelectDBMS,
    SelectTextLength
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
