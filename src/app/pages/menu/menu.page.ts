import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  /* side menu links */
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Services',
      url: '/services',
      icon: 'people'
    },
    {
      title: 'Customers',
      url: '/customers',
      icon: 'medkit'
    },
    {
      title: 'Templates',
      url: '/templates',
      icon: 'medkit'
    },
    {
      title: 'Blog',
      url: '/blog',
      icon: 'newspaper'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'lock-open'
    },
    {
      title: 'Logout',
      url: '/logout',
      icon: 'lock-closed'
    },
    {
      title: 'Account',
      url: '/admin',
      icon: 'person-circle'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  setTitle(title) {}

}
