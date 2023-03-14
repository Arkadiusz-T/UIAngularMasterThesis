import { Component } from '@angular/core';
import { ShareTestData } from '../services/shareTestData.service';

@Component({
  selector: 'post-soap-answer-button',
  templateUrl: './postSoapAnswerButton.component.html',
  styleUrls: []
})
export class PostSoapAnswerButton {
  constructor(private _shareTestData: ShareTestData){}
  getValue(){
      console.log(this._shareTestData);
  }
}