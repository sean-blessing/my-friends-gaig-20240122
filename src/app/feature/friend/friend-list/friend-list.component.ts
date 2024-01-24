import { Component, OnDestroy, OnInit } from '@angular/core';
import { Friend } from 'src/app/model/friend';
import { FriendService } from 'src/app/service/friend.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit, OnDestroy {
  title: string = "Friend-List";
  friends: Friend[] = [];
  
  constructor(private friendSvc: FriendService) {}
  
  ngOnInit(): void {
    this.friends = this.friendSvc.getFriends();
  }
  ngOnDestroy(): void {
    
  }

}
