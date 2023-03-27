import { Component, ElementRef, ViewChild} from '@angular/core';
import { take } from 'rxjs';
import { ExtractDataFromRestResp } from '../services/extractDataFromRestResponse.service';
import { GetDataFromApi } from '../services/getDataFromApi.service';
import { ShareTestData } from '../services/shareTestData.service';

@Component({
  selector: 'get-rest-answer-button',
  templateUrl: './getRestAnswerButton.component.html',
  styleUrls: []
})
export class GetRestAnswerButton {
  constructor(private _shareTestData: ShareTestData, private _getDataFromApi: GetDataFromApi, private _responseDataExtractor: ExtractDataFromRestResp){}

  getCurrentTime = (): number => {
    const date = new Date();
    return Number(date.getTime().toString());
  };

  getValue(){
      console.log(this._shareTestData);
      this._getDataFromApi
      .getDataFromRestEndpoint(this._shareTestData.dbmsType, this._shareTestData.textLength, this._shareTestData.variableType)
      .subscribe((data) =>{
        this._shareTestData.restAnswer = JSON.stringify(data).replaceAll('"',"");

        console.log(this._shareTestData.restAnswer);

        this._shareTestData.dbDataFetchTime = "dbDataFetchTime: " + this._responseDataExtractor.extractDbmsData(this._shareTestData.restAnswer);
        this._shareTestData.frontToBackEndTime = "frontToBackEndTime:" +  this._responseDataExtractor.extracFrontToBackendData(this._shareTestData.restAnswer);
        this._shareTestData.backendResponseTime = "backendResponseTime: " +  (this.getCurrentTime() - Number(this._responseDataExtractor.extracBackendResponseTimeData(this._shareTestData.restAnswer))).toString();
        this._shareTestData.textsSimilarity = "textsSimilarity: " + this._responseDataExtractor.extracTextsSimilarityData(this._shareTestData.restAnswer);
      }
      );
  }
} 