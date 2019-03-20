import {ESwitch} from "../enums/eswitch.enum";
import {EStatus} from "../enums/estatus.enum";

export class Log {
    private id: number;
    private eSwitch: ESwitch; //Onn or Off
    private eStatus: EStatus;  //Online, Offline, or Unreachable
    private reqDateTime: Date;
    private respDateTime: Date;


    get getId(): number {
        return this.id;
    }

    set setId(id: number) {
        this.id = id;
    }

    get getESwitch(): ESwitch {
        return this.eSwitch;
    }

    set setESwitch(eSwitch: ESwitch) {
        this.eSwitch = eSwitch;
    }

    get getEStatus(): EStatus {
        return this.eStatus;
    }

    set setEStatus(eStatus: EStatus) {
        this.eStatus = eStatus;
    }

    get getReqDateTime(): Date {
        return this.reqDateTime;
    }

    set setReqDateTime(reqDateTime: Date) {
        this.reqDateTime = reqDateTime;
    }

    get getRespDateTime(): Date {
        return this.respDateTime;
    }

    set setRespDateTime(respDateTime: Date) {
        this.respDateTime = respDateTime;
    }
}
