import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lunch-dinner',
  templateUrl: './lunch-dinner.component.html',
  styleUrls: ['./lunch-dinner.component.css']
})
export class LunchDinnerComponent implements OnInit {

  lunchDinner = [
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
