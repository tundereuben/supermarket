import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tubers',
  templateUrl: './tubers.component.html',
  styleUrls: ['./tubers.component.css']
})
export class TubersComponent implements OnInit {

  spices = [
    {
      name: 'cinnamon steak',
      img: '/assets/images/culinary-herbs.jpeg',
      url: '/herbs/culinary'
    },
    {
      name: 'ground cummin',
      img: '/assets/images/culinary-herbs.jpeg',
      url: '/herbs/culinary'
    },
    {
      name: 'neem leaf (dongoyaro)',
      img: '/assets/images/culinary-herbs.jpeg',
      url: '/herbs/culinary'
    },
    {
      name: 'paprika',
      img: '/assets/images/culinary-herbs.jpeg',
      url: '/herbs/culinary'
    },
    {
      name: 'jamaican jerk',
      img: '/assets/images/culinary-herbs.jpeg',
      url: '/herbs/culinary'
    },
    {
      name: 'chili powder',
      img: '/assets/images/culinary-herbs.jpeg',
      url: '/herbs/culinary'
    },
    {
      name: 'mild curry powder',
      img: '/assets/images/culinary-herbs.jpeg',
      url: '/herbs/culinary'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
