import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  list_info: object = [
    {
      title: 'Phone',
      data: '+506 71445897'
    },
    {
      title: 'Email',
      data: 'jafet.moraugalde15@gmail.com'
    },
    {
      title: 'Address',
      data: 'San Antonio, Alajuela, Costa Rica 20104'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
