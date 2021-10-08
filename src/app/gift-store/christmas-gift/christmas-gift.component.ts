import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-christmas-gift',
  templateUrl: './christmas-gift.component.html',
  styleUrls: ['./christmas-gift.component.css']
})
export class ChristmasGiftComponent implements OnInit {

  gifts = [
    {
      name: 'Christmas Hamper',
      img: '/assets/images/culinary-herbs.jpeg',
      url: '/herbs/culinary'
    },
    {
      name: 'Christmas Candy Box',
      img: '/assets/images/christmas-candy-box.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Christmas Hair Pin',
      img: '/assets/images/christmas-hair-pin.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Christmas Wine Bag',
      img: '/assets/images/christmas-wine-bag.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Christmas Socks Pouch',
      img: '/assets/images/christmas-socks-pouch.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Christmas Tree',
      img: '/assets/images/christmas-tree.jpg',
      url: '/herbs/culinary'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
