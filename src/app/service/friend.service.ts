import { Injectable } from '@angular/core';
import { Friend } from '../model/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  friends: Friend[] = [];

  constructor() {
    this.initializeFriends();
  }

  initializeFriends() {
    if (this.friends.length==0) {
      this.friends.push(new Friend(1, "Bob Smith", 27, "bsmith@test.com", false));
      this.friends.push(new Friend(2, "Julie Little", 43, "jlittle@test.com", true));
      this.friends.push(new Friend(3, "Dave Grohl", 54, "dgrohl@foo.com", false));
      this.friends.push(new Friend(4, "Jason Kelce", 37, "jkelce@eagles.com", false));
      this.friends.push(new Friend(5, "Sally Strong", 50, "sstrong@test.com", true));
    }
  }

  getFriends() {
    return this.friends;
  }

  addFriend(friend: Friend) {
    this.friends.push(friend);
  }
}
