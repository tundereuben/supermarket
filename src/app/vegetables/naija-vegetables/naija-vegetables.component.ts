import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-naija-vegetables',
  templateUrl: './naija-vegetables.component.html',
  styleUrls: ['./naija-vegetables.component.css']
})
export class NaijaVegetablesComponent implements OnInit {

  vegetables = [
    {
      name: 'shoko',
      img: '/assets/images/Shoko.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'ugwu',
      img: '/assets/images/ugwu.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'arowojeja',
      img: '/assets/images/arowojeja.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'igbo',
      img: '/assets/images/igbo.jpg',
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
