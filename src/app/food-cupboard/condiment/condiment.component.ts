import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condiment',
  templateUrl: './condiment.component.html',
  styleUrls: ['./condiment.component.css']
})
export class CondimentComponent implements OnInit {

  condiments = [
    {
      name: 'hot sweet chili sauce',
      img: '/assets/images/hot-sweet-chilli-sauce.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'blended sesame oil',
      img: '/assets/images/blended-sesame-oil.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'amoy oyster sauce',
      img: '/assets/images/amoy-oyster-sauce.jpg',
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
