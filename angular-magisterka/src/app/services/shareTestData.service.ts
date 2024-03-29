import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn: "root"
    }
)

export class ShareTestData{
    
    public dbmsType: string = "mysql";
    public textLength: string = "krotkie";
    public variableType: string = "char";
    public restAnswer: any;
    public soapAnswer: any;
    public dbDataFetchTime: any = "";
    public frontToBackEndTime: any = "";
    public backendResponseTime: any = "";
    public textsSimilarity: any = "";
}