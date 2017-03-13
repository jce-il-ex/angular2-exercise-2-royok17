import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})

export class NavMenuComponent implements OnInit {
myList = [
  {
    id:1,
    txt:'Home'
  },
  {
    id:2,
    txt:'Forums'
  },
  {
    id:3,
    txt:'Chats'
  },
  {
    id:4,
    txt:'Contact us'
  }
];
  constructor() { }

  ngOnInit() {
  }

}