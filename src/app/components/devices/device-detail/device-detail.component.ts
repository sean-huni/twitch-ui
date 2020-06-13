import {Component, OnInit} from '@angular/core';
import {Device} from "../../../models/device.model";
import {DeviceListDetailService} from "../../../services/device-list-detail.service";

@Component({
    selector: 'app-device-detail',
    templateUrl: './device-detail.component.html',
    styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
    private device: Device;

    constructor(private deviceService: DeviceListDetailService) {
    }

    ngOnInit() {
        this.deviceService.getObservableDevice.subscribe(device => this.device = device);
    }

}
