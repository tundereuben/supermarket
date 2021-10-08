import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  fruits = [
    {
      name: 'kiwi',
      img: '/assets/images/kiwi.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'tangelo',
      img: '/assets/images/tangelo.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'grapes',
      img: '/assets/images/grapes.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'guava',
      img: '/assets/images/guava.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'strawberry',
      img: '/assets/images/strawberry.jpg',
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
