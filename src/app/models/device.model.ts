import {Log} from "../models/log.model";

export class Device {
    // id: 1, location: "Bathroom Lights", localDateTime: "09/03/2019 13:57:18", type: "Light", location: "Sean's Bathroom", …}
    private id: number;
    private onn: boolean;   //current switch-state of the device
    private location: string; //or descr or location
    private channel: number; //Rely channel port
    private type: string; //type of the device
    private localDateTime: Date;
    private logs: Log[] = [];


    get getId(): number {
        return this.id;
    }

    set setId(value: number) {
        this.id = value;
    }

    get isOnn(): boolean {
        return this.onn;
    }

    set setOnn(onn: boolean) {
        this.onn = onn;
    }

    get getLocation(): string {
        return this.location;
    }

    set setLocation(location: string) {
        this.location = location;
    }

    get getChannel(): number {
        return this.channel;
    }

    set setChannel(channel: number) {
        this.channel = channel;
    }

    get getType(): string {
        return this.type;
    }

    set setType(type: string) {
        this.type = type;
    }

    get getLocalDateTime(): Date {
        return this.localDateTime;
    }

    set setLocalDateTime(value: Date) {
        this.localDateTime = value;
    }

    get getLogs(): Log[] {
        return this.logs;
    }

    set setLogs(value: Log[]) {
        this.logs = value;
    }
}
