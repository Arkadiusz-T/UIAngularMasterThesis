import { Component } from '@angular/core';
import { GetDataFromApi } from '../services/getDataFromApi.service';
import { ShareTestData } from '../services/shareTestData.service';

@Component({
  selector: 'post-soap-answer-button',
  templateUrl: './postSoapAnswerButton.component.html',
  styleUrls: []
})
export class PostSoapAnswerButton {
  constructor(private _shareTestData: ShareTestData, private _getDataFromApi: GetDataFromApi){}
  getValue(){
      console.log(this._shareTestData);
      this._getDataFromApi.getDataFromRestEndpoint(this._shareTestData.dbmsType, this._shareTestData.textLength, this._shareTestData.variableType);
  }
}