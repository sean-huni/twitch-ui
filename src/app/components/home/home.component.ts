import {Component, OnInit} from '@angular/core';
import {formatDate} from "@angular/common";
import {DeviceService} from '../../services/device.service';
import {RollingLogsModel} from "../../models/rolling-logs.model";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private inView: Boolean = true;
    private fDate: string = 'MM/dd/yyyy HH:mm:ss';
    private locale: string = 'en-ZA';

    constructor(private deviceService: DeviceService) {
    }

    private _logsModel: RollingLogsModel[] = [];

    get logsModel(): RollingLogsModel[] {
        return this._logsModel;
    }

    // execute command to build: npm run build

    set logsModel(value: RollingLogsModel[]) {
        this._logsModel = value;
    }

    checkIfInViewport(event: any) {
        // console.log(event);
        if (!(event.target.classList.value === 'in-view') && event.visible) {
            event.target.classList.add('in-view');
            this.inView = true;
        }

        if (!event.visible && event.target.classList.value === 'in-view') {
            event.target.classList.remove('in-view');
            this.inView = false;
        }
    }

    checkIfInViewportEvent(event: any) {
        console.log(event);
        if (event.visible) {
            this.inView = true;
        } else {
            this.inView = false;
        }
    }

    ngOnInit() {
        this.fetchAllDevicesAndLogs();
    }

    fetchAllDevicesAndLogs() {
        console.log('Fetching all devices and logs...');
        this.deviceService.fetchRollingLogs().subscribe(
            resp => {
                console.log('Device Init Response: ', resp);

                let devices: RollingLogsModel[] = resp['rolling-logs'];
                let v = Object.entries(devices).map(([type, value]) => ({type, value}));
                let x = v.values();
                for (let i = 1; i <= v.length; i++) {
                    this.logsModel.push((<RollingLogsModel>x.next().value.value));
                }

                // this.logsModel.forEach(value => value.dateTime = this.extractDate(value.dateTime.toDateString()));

            }, error1 => console.error(error1)
        );
    }

    extractDate(dateTimeStr: string) {
        return new Date(formatDate(dateTimeStr, this.fDate, this.locale));
    }

    twentyFourHrFormat(x: number) {
        let s: string = x.toString();
        return s.length < 2 ? '0' + s : s;
    }

    extractDateOG(dateTimeStr: string) {
        console.log('Str Date: ', dateTimeStr);

        let nDate = formatDate(dateTimeStr, this.fDate, this.locale);
        console.log('formatDate Obj: ', nDate);
        let aDate: Date = new Date(nDate);
        console.log('New Date Obj: ', aDate);
        return aDate;
    }

    dateSuperscriptSuffix(day: number) {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    }

    sliceDate(dateStr: string) {
        let x: Map<string, any> = new Map<any, any>();
        let dateAndTimeArr = dateStr.split(' ');
        let dateArr = dateAndTimeArr[0].split('/', 3);

        x.set('day', dateArr[1]);
        x.set('month', dateArr[0]);
        x.set('year', dateArr[2]);
        return x;
    }

    monthOfTheYear(cardinalYear: string) {
        let fYear = parseInt(cardinalYear);
        switch (fYear) {
            case 1:
                return 'January';
            case 2:
                return 'February';
            case 3:
                return 'March';
            case 4:
                return 'April';
            case 5:
                return 'May';
            case 6:
                return 'June';
            case 7:
                return 'July';
            case 8:
                return 'August';
            case 9:
                return 'September';
            case 10:
                return 'October';
            case 11:
                return 'November';
            default:
                return 'December';
        }
    }
}
