import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soup',
  templateUrl: './soup.component.html',
  styleUrls: ['./soup.component.css']
})
export class SoupComponent implements OnInit {

  soup = [
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
