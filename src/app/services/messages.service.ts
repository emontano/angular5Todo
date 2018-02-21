import { Injectable } from '@angular/core';
import { FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Injectable()
export class MessagesService {

  constructor(private flashMessage: FlashMessagesService,private router:Router) { }

  displayMessage(message:string, messageclass:string){
    this.flashMessage.show(message, {cssClass:messageclass, timeout:4000});
  }

  displayMessageRedirect(message:string, messageclass:string,route:string){
    this.flashMessage.show(message, {cssClass:messageclass, timeout:4000});
    this.router.navigate([route]);
  }


}
