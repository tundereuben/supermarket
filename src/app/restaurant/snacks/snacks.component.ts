import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.component.html',
  styleUrls: ['./snacks.component.css']
})
export class SnacksComponent implements OnInit {

  snacks = [
    {
      name: 'English breakfast',
      img: '/assets/images/',
      url: '/'
    },
    {
      name: 'xx',
      img: '/assets/images/',
      url: '/'
    },
    {
      name: 'yy',
      img: '/assets/images/',
      url: '/'
    },
    {
      name: 'zz',
      img: '/assets/images/',
      url: '/'
    },
    {
      name: 'mff',
      img: '/assets/images/',
      url: '/'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
