import { Component } from '@angular/core';
import { ExtractDataFromSoapWs } from '../services/extractDataFromSoapResponse.service';
import { GetDataFromApi } from '../services/getDataFromApi.service';
import { ShareTestData } from '../services/shareTestData.service';

@Component({
  selector: 'post-soap-answer-button',
  templateUrl: './postSoapAnswerButton.component.html',
  styleUrls: []
})
export class PostSoapAnswerButton {

  constructor(private _shareTestData: ShareTestData, private _getDataFromApi: GetDataFromApi, private _responseDataExtractor: ExtractDataFromSoapWs){}

  getCurrentTime = (): number => {
    const date = new Date();
    return Number(date.getTime().toString());
  };

  getValue(){
    console.log(this._shareTestData);
    this._getDataFromApi
    .getDataFromSoapEndpoint(this._shareTestData.dbmsType, this._shareTestData.textLength, this._shareTestData.variableType)
    .subscribe((data) =>{
      console.log(data)
    },
    (error) => {
      this._shareTestData.soapAnswer = error.error.text;
      this._shareTestData.dbDataFetchTime = "dbDataFetchTime: " + this._responseDataExtractor.extractDbmsData(error.error.text);
      this._shareTestData.frontToBackEndTime = "frontToBackEndTime:" + this._responseDataExtractor.extracFrontToBackendData(error.error.text);
      this._shareTestData.backendResponseTime = "backendResponseTime: " + (this.getCurrentTime() - Number(this._responseDataExtractor.extracBackendResponseTimeData(error.error.text))).toString();
      this._shareTestData.textsSimilarity = "textsSimilarity: " + this._responseDataExtractor.extracTextsSimilarityData(error.error.text);
    }
    );
  }
}

