import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendListComponent } from './feature/friend/friend-list/friend-list.component';
import { FriendCreateComponent } from './feature/friend/friend-create/friend-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/friend/list', pathMatch:'full'},
  { path: 'friend/list', component: FriendListComponent},
  { path: 'friend/create', component: FriendCreateComponent},
  { path: '**', component: FriendListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
