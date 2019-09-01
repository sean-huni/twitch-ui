import {Injectable} from '@angular/core';
import {ESwitch} from "../enums/eswitch.enum";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppConst} from "../const/app-const";


@Injectable({
    providedIn: 'root'
})
export class DeviceService {

    private headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });

    constructor(private httpClient: HttpClient) {
    }

    getAllDevices() {
        return this.httpClient.get(AppConst.REST_ENDPOINT_DEVICES, {headers: this.headers});
    }

    getRollingLogs() {
        const reqUrl = AppConst.REST_ENDPOINT_DEVICES + 'rolling-logs';
        return this.httpClient.get(reqUrl, {headers: this.headers});
    }

    flipSwitch(id: number, option: ESwitch) {
        const reqUrl = AppConst.REST_ENDPOINT_DEVICES + id + '?switch=' + option;
        return this.httpClient.put(reqUrl, null, {headers: this.headers})
    }
}
