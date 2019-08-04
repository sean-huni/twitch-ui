import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {FormsModule} from "@angular/forms";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatButtonModule } from "@angular/material/button";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {DevicesComponent} from './components/devices/devices.component';
import {DeviceListComponent} from './components/devices/device-list/device-list.component';
import {DeviceDetailComponent} from './components/devices/device-detail/device-detail.component';
import {NavbarComponent} from './components/layouts/navbar/navbar.component';
import {FooterComponent} from './components/layouts/footer/footer.component';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ModalModule} from 'ngx-bootstrap/modal';
import {CommonModule} from "@angular/common";
import {SharedModule} from "./shared.module";

import {InViewportModule} from "ng-in-viewport";
import 'intersection-observer';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DevicesComponent,
        DeviceListComponent,
        DeviceDetailComponent,
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        TooltipModule.forRoot(),
        ModalModule.forRoot(),
        SharedModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        BrowserAnimationsModule,
        InViewportModule
    ],
    exports: [BsDropdownModule, TooltipModule, ModalModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
