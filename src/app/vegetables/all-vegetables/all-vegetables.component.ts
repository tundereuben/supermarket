import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-vegetables',
  templateUrl: './all-vegetables.component.html',
  styleUrls: ['./all-vegetables.component.css']
})
export class AllVegetablesComponent implements OnInit {

  allVegetables = [
    {
      name: 'bitter melon',
      img: '/assets/images/bitter-melon.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'brussels sprout',
      img: '/assets/images/brussels-sprout.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'chinese cabbage',
      img: '/assets/images/chinese-cabbage.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'artichoke',
      img: '/assets/images/artichoke.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'chinese brocolli',
      img: '/assets/images/culinary-herbs.jpeg',
      url: '/herbs/culinary'
    },
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
