import { Injectable } from "@angular/core";

@Injectable(
    {
        providedIn: "root"
    }
)

export class ExtractDataFromRestResp{

    public extractDbmsData(soapResponse: string){
        return soapResponse.match("czasPobieraniaTekstowZBazyDanych:.*,czasPrzeslaniaReque")?.at(0)?.match(/[0-9]+/)?.at(0);
    }

    public extracFrontToBackendData(soapResponse: string){
        return soapResponse.match("PrzeslaniaRequestuZFrontuDoBackendu:.*,")?.at(0)?.match(/[0-9]+/)?.at(0);
    }

    public extracBackendResponseTimeData(soapResponse: string){
        return soapResponse.match("czasWystawieniaOdpowiedziDlaFrontendu:.*,")?.at(0)?.match(/[0-9]+/)?.at(0);
    }

    public extracTextsSimilarityData(soapResponse: string){
        return soapResponse.match("podobienstwoTextow:.*")?.at(0)?.match(/[0-9]+.[0-9]+/)?.at(0);
    }
}