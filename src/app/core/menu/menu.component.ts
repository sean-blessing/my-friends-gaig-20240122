import { Component } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  title: string = "BMDB NG Demo";
  menuItems: MenuItem[] = [];

  constructor(){}

  ngOnInit(): void {
    // populate menuItems with a menu item for each component
    this.menuItems = [
      new MenuItem("Friend List", "/friend/list", "Friend List"),
      new MenuItem("Friend Create", "/friend/create", "Friend Create")
    ];
  }
}
