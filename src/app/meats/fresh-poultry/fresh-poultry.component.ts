import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fresh-poultry',
  templateUrl: './fresh-poultry.component.html',
  styleUrls: ['./fresh-poultry.component.css']
})
export class FreshPoultryComponent implements OnInit {

  poultry = [
    {
      name: 'chicken breast',
      img: '/assets/images/chicken-breast.jpg',
      url: '/meats/chicken-breast'
    },
    {
      name: 'drum stick',
      img: '/assets/images/drumsticks.jpg',
      url: '/meats/drumsticks'
    },
    {
      name: 'full chicken',
      img: '/assets/images/full-chicken.jpg',
      url: '/meats/full-chicken'
    },
    {
      name: 'chicken wings',
      img: '/assets/images/chicken-wings.jpg',
      url: '/meats/chicken-wings'
    },
    // {
    //   name: 'jamaican jerk',
    //   img: '/assets/images/culinary-meats.jpeg',
    //   url: '/meats/culinary'
    // },
    // {
    //   name: 'chili powder',
    //   img: '/assets/images/culinary-meats.jpeg',
    //   url: '/meats/culinary'
    // },
    // {
    //   name: 'mild curry powder',
    //   img: '/assets/images/culinary-meats.jpeg',
    //   url: '/meats/culinary'
    // },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
