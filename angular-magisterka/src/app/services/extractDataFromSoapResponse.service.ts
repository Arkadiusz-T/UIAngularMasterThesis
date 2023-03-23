import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn: "root"
    }
)

export class ExtractDataFromSoapWs{

    public extractDbmsData(soapResponse: string){
        return soapResponse.match("dbDataFetchTime>.*</dbDataFetchTime")?.at(0)?.match(/[0-9]+/)?.at(0);
    }

    public extracFrontToBackendData(soapResponse: string){
        return soapResponse.match("backendResponseTime>.*</backendResponseTime")?.at(0)?.match(/[0-9]+/)?.at(0);
    }

    public extracBackendResponseTimeData(soapResponse: string){
        return soapResponse.match("frontToBackEndTime>.*</frontToBackEnd")?.at(0)?.match(/[0-9]+/)?.at(0);
    }

    public extracTextsSimilarityData(soapResponse: string){
        return soapResponse.match("textsSimilarity>.*</textsSimilarity")?.at(0)?.match(/[0-9]+.[0-9]+/)?.at(0);
    }
}