import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})
export class AppComponent implements OnInit {
  title = 'angular-portfolio-app';

  ngOnInit() {

    let hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    let mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
    let menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    let header = document.querySelector('.header.container');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobile_menu.classList.toggle('active');
    });

    document.addEventListener('scroll', () => {
      var scroll_position = window.scrollY;
      if (scroll_position > 250) {
        (header as HTMLElement).style.backgroundColor = '#29323c';
      } else {
        (header as HTMLElement).style.backgroundColor = 'transparent';
      }
    });

    menu_item.forEach((item) => {
      item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
      });
    });
  }
}
