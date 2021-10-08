import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spices',
  templateUrl: './spices.component.html',
  styleUrls: ['./spices.component.css']
})
export class SpicesComponent implements OnInit {

  spices = [
    {
      name: 'cinnamon steak',
      img: '/assets/images/cinnamon-sticks.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'ground cummin',
      img: '/assets/images/ground-cumin.jpg',
      url: '/herbs/culinary'
    },
    // {
    //   name: 'neem leaf (dongoyaro)',
    //   img: '/assets/images/culinary-herbs.jpeg',
    //   url: '/herbs/culinary'
    // },
    {
      name: 'paprika',
      img: '/assets/images/paprika.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'jamaican jerk',
      img: '/assets/images/jamaican-jerk.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'chili powder',
      img: '/assets/images/chili-powder.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'mild curry powder',
      img: '/assets/images/mild-curry.jpg',
      url: '/herbs/culinary'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
