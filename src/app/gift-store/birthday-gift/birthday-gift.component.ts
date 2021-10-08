import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday-gift',
  templateUrl: './birthday-gift.component.html',
  styleUrls: ['./birthday-gift.component.css']
})
export class BirthdayGiftComponent implements OnInit {

  gifts = [
    {
      name: 'Personalized Name Brooch',
      img: '/assets/images/personalized-name-brooch.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Personalized Name Bracelet',
      img: '/assets/images/personalized-name-bracelet.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Men Boutonniere',
      img: '/assets/images/men-boutonniere.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Brooch',
      img: '/assets/images/brooch.jpg',
      url: '/herbs/culinary'
    },
  
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
