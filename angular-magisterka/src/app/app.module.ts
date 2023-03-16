import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetRestAnswerButton } from './components/getRestAnswerButton.component';
import { InfoBar } from './components/InfoBar.component';
import { PostSoapAnswerButton } from './components/postSoapAnswerButton.component';
import { SelectDBMS } from './components/selectBdmsType.component';
import { SelectTestParameters } from './components/selectTestParameters.component';
import { SelectTextLength } from './components/selectTextLength.component';
import { SelectVarType } from './components/selectVarType.component';
import { GetDataFromApi } from './services/getDataFromApi.service';
import { ShareTestData } from './services/shareTestData.service';

@NgModule({
  declarations: [
    AppComponent,
    InfoBar,
    SelectDBMS,
    SelectTextLength,
    SelectVarType,
    SelectTestParameters,
    GetRestAnswerButton,
    PostSoapAnswerButton
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ShareTestData, 
    GetDataFromApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
