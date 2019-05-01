import { TestBed, inject } from '@angular/core/testing';

import { ChatService } from './chat.service';
import {RouterTestingModule} from "@angular/router/testing";
import {ToastrModule} from "ngx-toastr";
import { SolidChat } from '../models/solid-chat.model';

describe('ChatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, ToastrModule.forRoot() ] ,
      providers: [ChatService]
    });
  });

  it('should be created', inject([ChatService], (service: ChatService) => {
    expect(service).toBeTruthy();
  }));

  it('should get name user from webId', inject([ChatService], (service: ChatService) => {
    let webId = "https://user.solid.community/profile/card#me";
    let user = service.getUsername(webId);
    expect(user).toBe('user');
  }));

  it('should create inbox chat', inject([ChatService], (service: ChatService) => {
    let idUser1 = "https://user1.solid.community/profile/card#me";
    let idUser2 = "https://user2.solid.community/profile/card#me";
    let chat1 = "https://" + service.getUsername(idUser1) + ".solid.community/private/Chat" + service.getUsername(idUser2) + "/";
    let chat2 = "https://" + service.getUsername(idUser2) + ".solid.community/private/Chat" + service.getUsername(idUser1) + "/";
    service.createInboxChat(idUser1,idUser2);
    expect(service.userID).toBe(idUser1);
    expect(service.friendID).toBe(idUser2);
    expect(service.chatuserUrl).toBe(chat1);
    expect(service.chatfriendUrl).toBe(chat2);
  }));


});
