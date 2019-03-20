import { Component, OnInit } from '@angular/core';
import {ESwitch} from "../../enums/eswitch.enum";
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   private swtichOp: ESwitch;
   private deviceID: number = 1;

  constructor(private deviceService: DeviceService) { }

  ngOnInit() {
  }

  // execute command to build: npm run build

    toggleSwitch(switchAction: Boolean){
        this.swtichOp = switchAction ? ESwitch.ONN : ESwitch.OFF;
        console.log('ESwitch: ',this.swtichOp);
        this.deviceService.flipSwitch(this.deviceID, this.swtichOp).subscribe(
            resp => {
                console.log(resp);
            }, error1 => console.error(error1)
        );
    }
}
