import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-culinary',
  templateUrl: './culinary.component.html',
  styleUrls: ['./culinary.component.css']
})
export class CulinaryComponent implements OnInit {

  culinaryHerbs = [
    {
      name: 'fresh rosemary',
      img: '/assets/images/rosemary-leaf.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'cinnamon steak',
      img: '/assets/images/cinnamon-sticks.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'fresh thyme',
      img: '/assets/images/fresh-thyme.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'dried curry',
      img: '/assets/images/mild-curry.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'parsely',
      img: '/assets/images/parsley.jpg',
      url: '/herbs/culinary'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
