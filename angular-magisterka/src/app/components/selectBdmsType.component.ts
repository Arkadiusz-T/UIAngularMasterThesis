import { Component } from '@angular/core';
import { ShareTestData } from '../services/shareTestData.service';

@Component({
  selector: 'select-dbms',
  templateUrl: './selectBdmsType.component.html',
  styleUrls: []
})
export class SelectDBMS {
  constructor(private _shareTestData: ShareTestData){}

  onSelected(newValue: string){
    this._shareTestData.dbmsType = newValue;
  }
} 