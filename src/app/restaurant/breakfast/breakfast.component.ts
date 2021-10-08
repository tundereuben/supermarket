import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  breakfast = [
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
