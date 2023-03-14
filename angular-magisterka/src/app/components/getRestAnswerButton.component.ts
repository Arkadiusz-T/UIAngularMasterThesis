import { Component, ElementRef, ViewChild} from '@angular/core';
import { ShareTestData } from '../services/shareTestData.service';

@Component({
  selector: 'get-rest-answer-button',
  templateUrl: './getRestAnswerButton.component.html',
  styleUrls: []
})
export class GetRestAnswerButton {
  constructor(private _shareTestData: ShareTestData){}
  getValue(){
      console.log(this._shareTestData);
  }
} 