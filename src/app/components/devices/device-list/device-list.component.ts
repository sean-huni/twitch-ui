import {Component, OnInit} from '@angular/core';
import {Device} from "../../../models/device.model";
import {ESwitch} from "../../../enums/eswitch.enum";
import {DeviceService} from "../../../services/device.service";
import {DeviceListDetailService} from "../../../services/device-list-detail.service";

@Component({
    selector: 'app-device-list',
    templateUrl: './device-list.component.html',
    styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent implements OnInit {
    private device: Device;
    private _devices: Device[] = [];

    constructor(private deviceService: DeviceService, private deviceListDetailService: DeviceListDetailService) {
    }

    get getDevices(): Device[] {
        return this._devices;
    }

    set setDevices(value: Device[]) {
        this._devices = value;
    }

    ngOnInit() {
        this.deviceListDetailService.getObservableDevice.subscribe(device => this.device = device);
        this.invokeDeviceService();
    }

    /* *****************
     * Getter & Setters
     * *****************
     */

    onToggleSwitch(event, anyDevice: any) {
        let device: Device = new Device();

        console.log("Device-ID: ", anyDevice.id);
        console.log("Device-Location: ", anyDevice.location);
        console.log("Event: ", event.checked);

        anyDevice.onn = event.checked;

        device.setId = anyDevice.id;
        device.setOnn = anyDevice.onn;
        device.setLocation = anyDevice.location;
        device.setType = anyDevice.type;
        device.setChannel = anyDevice.channel;
        device.setLocalDateTime = anyDevice.localDateTime;
        device.setLogs = anyDevice.logs;

        let eSwitch: ESwitch = device.isOnn ? ESwitch.ONN : ESwitch.OFF;
        console.log("Switch: ", eSwitch);
        this.deviceListDetailService.changeDeviceInfo(device);
        console.log('\nDevice To Invoke: ' + device);
        this.deviceService.flipSwitch(device.getId, eSwitch).subscribe(
            resp => {
                console.log('Switch Response: ', resp);
            }, error1 => console.error(error1)
        );
    }

    invokeDeviceService() {
        this.deviceService.getAllDevices().subscribe(
            resp => {
                console.log('Http Resp', resp);
                // console.log('Http Resp Values', resp.values().next().value);
                // this.setDevices = (<Device[]>resp);

                let devices: Device[] = resp['devices'];

                // const dataArr = JSON.parse(JSON.stringify(respKey)) as Device[];
                // const details = dataArr.map(data => new Device().setInstance(data));

                let v = Object.entries(devices).map(([type, value]) => ({type, value}));
                let x = v.values();
                for (let i = 1; i <= v.length; i++) {
                    this.getDevices.push((<Device>x.next().value.value));
                }

                this.getDevices.forEach(value => console.log(value));


                // let arr = Object.keys(resp).map(key => {
                //     let d:Device = resp[key];
                //     console.log("d-Hack",d);
                //     this.getDevices.push(d);
                // });

                // console.log("Arr-Hack",arr);

                // let x = JSON.parse(JSON.stringify(resp));
                // this.devices =
                // Object.values(resp).map(value => {
                //     let d: Device = (<Device>value);
                //     this.getDevices.push(d);
                //     console.log("device-loco: ", d.getLocation);
                // });

                // this.setDevices = resp as Device[];
                // console.log('JSON-Resp', this.getDevices);
                // this.devices.push(res);
                // this._devices = res as Device[];
                console.log('Devices: ', this._devices);
                // console.log('Values: ', this.devices.values());
            }, error => console.error(error)
        );
    }


    get devices(): Device[] {
        return this._devices;
    }
}
