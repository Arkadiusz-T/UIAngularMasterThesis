import { Component } from '@angular/core';
import { ShareTestData } from '../services/shareTestData.service';

@Component({
  selector: 'select-var-type',
  templateUrl: './selectVarType.component.html',
  styleUrls: []
})
export class SelectVarType {
  constructor(private _shareTestData: ShareTestData){}

  onSelected(newValue: string){
    this._shareTestData.variableType = newValue;
  }
}
