import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicinal',
  templateUrl: './medicinal.component.html',
  styleUrls: ['./medicinal.component.css']
})
export class MedicinalComponent implements OnInit {

  medicinalHerbs = [
    {
      name: 'Pigeon Pea Leaf',
      img: '/assets/images/pigeon-pea-leaf.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'pawpaw leaf',
      img: '/assets/images/pawpaw-leaf.png',
      url: '/herbs/culinary'
    },
    {
      name: 'neem leaf (dongoyaro)',
      img: '/assets/images/neem-leaf-(dongoyaro).jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'lemon grass',
      img: '/assets/images/lemon-grass.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'moringa leaf',
      img: '/assets/images/moringa-leaf.jpg',
      url: '/herbs/culinary'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
