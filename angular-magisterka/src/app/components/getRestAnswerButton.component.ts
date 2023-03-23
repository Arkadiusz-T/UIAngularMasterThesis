import { Component, ElementRef, ViewChild} from '@angular/core';
import { take } from 'rxjs';
import { GetDataFromApi } from '../services/getDataFromApi.service';
import { ShareTestData } from '../services/shareTestData.service';

@Component({
  selector: 'get-rest-answer-button',
  templateUrl: './getRestAnswerButton.component.html',
  styleUrls: []
})
export class GetRestAnswerButton {
  constructor(private _shareTestData: ShareTestData, private _getDataFromApi: GetDataFromApi){}

  
  getValue(){
      console.log(this._shareTestData);
      this._getDataFromApi
      .getDataFromRestEndpoint(this._shareTestData.dbmsType, this._shareTestData.textLength, this._shareTestData.variableType)
      .subscribe((data) =>{
        this._shareTestData.restAnswer = data;
      }
      );
  }
} 