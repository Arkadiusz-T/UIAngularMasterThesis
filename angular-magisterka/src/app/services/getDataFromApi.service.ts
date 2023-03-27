import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
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
        let headers = new HttpHeaders().set('Content-Type', 'text/xml').set('responseType', 'json');
        
        return this.http.post(
            "http://localhost:8080/ws",
            `<?xml version="1.0" encoding="utf-8"?>
            <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"
                            xmlns:std="http://www.dupa.pl/soapexample"
            >
              <soap:Body>
                <std:getSoapTimes >
                  <textLength>`+textLength+`</textLength>
                  <textType>`+variableType+`</textType>
                  <czasWyslaniaRequestuZFrontendu>`+this.getCurrentTime()+`</czasWyslaniaRequestuZFrontendu>
                  <dbmsType>`+dbmsType+`</dbmsType>
                </std:getSoapTimes>
              </soap:Body>
            </soap:Envelope>`,
            {headers: headers}
        );
        
        // chrome.exe --disable-web-security --user-data-dir="C:/ChromeDevSession"
    }
}