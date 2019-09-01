export class RollingLogsModel {
    private _deviceId: number;

    get deviceId(): number {
        return this._deviceId;
    }

    set deviceId(value: number) {
        this._deviceId = value;
    }

    private _item: string;

    get item(): string {
        return this._item;
    }

    set item(value: string) {
        this._item = value;
    }

    private _status: string;

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    private _dateTime: Date = new Date();

    get dateTime(): Date {
        return this._dateTime;
    }

    set dateTime(value: Date) {
        this._dateTime = value;
    }
}
