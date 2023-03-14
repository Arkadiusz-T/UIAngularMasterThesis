import { Component } from '@angular/core';
import { ShareTestData } from '../services/shareTestData.service';

@Component({
  selector: 'select-text-length',
  templateUrl: './selectTextLength.component.html',
  styleUrls: []
})
export class SelectTextLength {
  constructor(private _shareTestData: ShareTestData){}

  onSelected(newValue: string){
    this._shareTestData.textLength = newValue;
  }
}
