import {Injectable} from '@angular/core';
import {ESwitch} from "../enums/eswitch.enum";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppConst} from "../const/app-const";


@Injectable({
    providedIn: 'root'
})
export class DeviceService {

    constructor(private httpClient: HttpClient) {
    }

    getAllDevices() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.httpClient.get(AppConst.REST_ENDPOINT_DEVICES, {headers: headers});
    }

    flipSwitch(id: number, option: ESwitch) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        const reqUrl = AppConst.REST_ENDPOINT_DEVICES + id + '?switch=' + option;
        return this.httpClient.put(reqUrl, null, {headers: headers})
    }
}
