import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding-gift',
  templateUrl: './wedding-gift.component.html',
  styleUrls: ['./wedding-gift.component.css']
})
export class WeddingGiftComponent implements OnInit {

  gifts = [
    {
      name: 'Men Lapel',
      img: '/assets/images/men-lapel.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Red Flower Ring Case',
      img: '/assets/images/red-flower-ring-case.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Baby Stroller Ring Case',
      img: '/assets/images/baby-stroller-ring-case.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Keyboard Ring Case',
      img: '/assets/images/keyboard-ring-case.jpg',
      url: '/herbs/culinary'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
