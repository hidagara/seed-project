import { Component } from '@angular/core';
import {Message} from "./message/message.model";


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})


export class AppComponent {
    message: Message = new Message ('some message' , 'me');


}
