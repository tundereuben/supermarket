import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fresh-goat',
  templateUrl: './fresh-goat.component.html',
  styleUrls: ['./fresh-goat.component.css']
})
export class FreshGoatComponent implements OnInit {

  goatMeats = [
    {
      name: 'goat lap',
      img: '/assets/images/goat-lap.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'cubed goat meat',
      img: '/assets/images/cubed-goat-meat.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'boneless goat meat',
      img: '/assets/images/boneless-goat-meat.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'goat head',
      img: '/assets/images/goat-head.jpg',
      url: '/herbs/culinary'
    },
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
