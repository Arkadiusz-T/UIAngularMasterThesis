import { Component } from '@angular/core';
import { ShareTestData } from '../services/shareTestData.service';

@Component({
  selector: 'result',
  templateUrl: './results.component.html',
  styleUrls: []
})
export class Result {
    constructor(public _sharedData: ShareTestData){}
}
