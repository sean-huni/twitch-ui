import {Injectable} from '@angular/core';
import {ESwitch} from '../enums/eswitch.enum';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConst} from '../const/app-const';
import {Switch} from '../models/switch.model';


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
        const sSwitch = new Switch();
        sSwitch.setStatus = option;
        const jsonBody: string = JSON.stringify(sSwitch);
        console.info('jsonString: ', jsonBody);
        const reqUrl = AppConst.REST_ENDPOINT_DEVICES + id;
        return this.httpClient.put(reqUrl, jsonBody, {headers: this.headers});
    }
}
