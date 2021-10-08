import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salad-dressing',
  templateUrl: './salad-dressing.component.html',
  styleUrls: ['./salad-dressing.component.css']
})
export class SaladDressingComponent implements OnInit {

  saladDressing = [
    {
      name: 'The Kitchen Creamy Herb',
      img: '/assets/images/the-kitchen-creamy-herb.png',
      url: '/herbs/culinary'
    },
    {
      name: 'The Kitchen Mustard & Cheese',
      img: '/assets/images/the-kitchen-creamy-herb.png',
      url: '/herbs/culinary'
    },
    {
      name: 'The Kitchen Blue Cheese Flavoured',
      img: '/assets/images/the-kitchen-blue-cheese-flavoured.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'The Kitchen Creamy Greek',
      img: '/assets/images/the-kitchen-creamy-greek.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'The Kitchen Creamy Honey & Mustard',
      img: '/assets/images/the-kitchen-creamy-honey_mustard.png',
      url: '/herbs/culinary'
    },
    {
      name: 'Knorr Yoghurt & Herb Salad Dressing',
      img: '/assets/images/Knorr-yoghurt_herb-salad-dressing.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Knorr Vinaigrette Greek Salad Dressing',
      img: '/assets/images/knorr-vinaigrette-greek-salad-dressing.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Knorr Vinaigrette Italian Salad Dressing',
      img: '/assets/images/knorr-vinaigrette-italian-salad-dressing.png',
      url: '/herbs/culinary'
    },
    {
      name: 'Knorr Creamy 1000 Island Salad Dressing',
      img: '/assets/images/knorr-creamy-1000-island-salad-dressing.png',
      url: '/herbs/culinary'
    },
    {
      name: 'Knorr Creamy Sweet Chilli Salad Dressing',
      img: '/assets/images/knorr-creamy-sweet-chilli-salad%20dressing.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Knorr Vinaigrette French Salad Dressing',
      img: '/assets/images/knorr-vinaigrette-french-salad-dressing.png',
      url: '/herbs/culinary'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
