import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn: "root"
    }
)

export class GetDataFromApi{

    constructor(private http: HttpClient){}

    getCurrentTime = (): string => {
        const date = new Date();
        return date.getTime().toString();
      };

    getDataFromRestEndpoint(dbmsType: string, textLength: string, variableType: string){
        return this.http.get(
            'http://localhost:8080/porownajTexty?textLength='+textLength+'&textType='+variableType+'&requestSentTimeStamp='+this.getCurrentTime()+'&dbmsType='+dbmsType
        )
    }

    getDataFromSoapEndpoint(dbmsType: string, textLength: string, variableType: string){
        
    }
}