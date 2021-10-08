import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pig',
  templateUrl: './pig.component.html',
  styleUrls: ['./pig.component.css']
})
export class PigComponent implements OnInit {

  pork = [
    {
      name: 'bacon',
      img: '/assets/images/bacon.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'pork rib',
      img: '/assets/images/pork-rib.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'pork steak',
      img: '/assets/images/pork-steak.jpg',
      url: '/herbs/culinary'
    },
    // {
    //   name: 'paprika',
    //   img: '/assets/images/culinary-herbs.jpeg',
    //   url: '/herbs/culinary'
    // },
    // {
    //   name: 'jamaican jerk',
    //   img: '/assets/images/culinary-herbs.jpeg',
    //   url: '/herbs/culinary'
    // },
    // {
    //   name: 'chili powder',
    //   img: '/assets/images/culinary-herbs.jpeg',
    //   url: '/herbs/culinary'
    // },
    // {
    //   name: 'mild curry powder',
    //   img: '/assets/images/culinary-herbs.jpeg',
    //   url: '/herbs/culinary'
    // },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
