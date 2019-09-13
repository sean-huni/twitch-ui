import {Injectable} from '@angular/core';
import {Device} from "../models/device.model";
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DeviceListDetailService {

    private deviceSource = new BehaviorSubject(new Device());
    private observableDevice = this.deviceSource.asObservable();

    constructor() {
    }

    get getObservableDevice(): Observable<Device> {
        return this.observableDevice;
    }

    changeDeviceInfo(device: Device) {
        this.deviceSource.next(device);
    }

    // set setCurrentDeviceInfo(value: Observable<Device>) {
    //     this.observableDevice = value;
    // }
}
