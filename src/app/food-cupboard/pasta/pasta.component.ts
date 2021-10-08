import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css']
})
export class PastaComponent implements OnInit {

  pasta = [
    {
      name: 'Barilla Mezze Penne Tricolor',
      img: '/assets/images/barilla-mezze-penne-tricolore.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Barilla Tagliatelle All’Uovo',
      img: '/assets/images/barilla-tagliatelle-all_uovo.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Barilla Gnocchetti',
      img: '/assets/images/barilla-gnocchetti.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Barilla Lasagne',
      img: '/assets/images/barilla-lasagne.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Napolina Penne',
      img: '/assets/images/mapolina-penne.jpg',
      url: '/herbs/culinary'
    },
    {
      name: 'Barilla Farfalle',
      img: '/assets/images/barilla-farfalle.jpg',
      url: '/herbs/culinary'
    },
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
