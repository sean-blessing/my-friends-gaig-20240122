import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Friend } from 'src/app/model/friend';
import { FriendService } from 'src/app/service/friend.service';

@Component({
  selector: 'app-friend-create',
  templateUrl: './friend-create.component.html',
  styleUrls: ['./friend-create.component.css']
})
export class FriendCreateComponent implements OnInit {
  title: string = "Friend-Create";
  newFriend: Friend = new Friend();
  
  constructor(private friendSvc: FriendService,
              private router: Router) {}

  ngOnInit(): void {
    
  }

  save() {
    this.friendSvc.addFriend(this.newFriend);
    this.newFriend = new Friend();
    this.router.navigateByUrl("/friend/list");
  }

}
