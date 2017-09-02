import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessageComponent} from "./message/message.component";
import {MessageListComponent} from "./message/message-list.component";
import {MessageInputComponent} from "./message/message-input.component";
import {MessagesComponent} from "./message/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {HeaderComponent} from "./header.component";
import {routing} from "./app.routing";
import {SignupComponent} from "./auth/signup.component";
import {LogoutComponent} from "./auth/logout.component";
import {SigninComponent} from "./auth/signin.component";
import {AuthService} from "./auth/auth.service";
@NgModule({
    declarations: [
        AppComponent,MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent
    ],

    imports: [BrowserModule, FormsModule,routing,ReactiveFormsModule,HttpModule],
    providers:[AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}