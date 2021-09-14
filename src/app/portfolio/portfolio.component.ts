import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {

  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    let header = document.querySelector('.header.container-fluid');
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
      (header as HTMLElement).style.backgroundColor = '#29323c';
    } else {
      (header as HTMLElement).style.backgroundColor = 'transparent';
    }
  }

  constructor() { }

  ngAfterViewInit(): void {
    let hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    let mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
    let menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobile_menu.classList.toggle('active');
    });

    menu_item.forEach((item) => {
      item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
      });
    });
  }
}
