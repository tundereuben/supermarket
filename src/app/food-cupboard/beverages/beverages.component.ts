import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {

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
