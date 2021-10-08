import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.css']
})

export class HomeCardsComponent implements OnInit {

  categories = [
    {
      name: 'herbs',
      subCategory: [
        {
          name: 'culinary',
          img: '/assets/images/culinary-herbs.jpeg',
          url: '/herbs/culinary'
        },
        {
          name: 'medicinal',
          img: '/assets/images/medicinal-herbs.jpeg',
          url: '/herbs/medicinal'
        },
        {
          name: 'spices',
          img: '/assets/images/spices.jpeg',
          url: '/herbs/spices'
        },
      ]
    },
    {
      name: 'vegetables',
      subCategory: [
        {
          name: 'fruits',
          img: '/assets/images/fruits.jpeg',
          url: '/vegetables/fruits',
        },
        {
          name: 'all vegetables',
          img: '/assets/images/all-vegetables.jpeg',
          url: '/vegetables/all-vegetables',
        },
        {
          name: 'naija vegetables',
          img: '/assets/images/naija-vegetables.jpeg',
          url: '/vegetables/naija-vegetables',
        },
        // {
        //   name: '14 healthiest vegetables',
        //   img: '/assets/images/spices.jpeg',
        // },
      ]
    },
    // {
    //   name: 'seafood',
    //   subCategory: [
    //     {
    //       name: 'fresh fish',
    //       img: '/assets/images/fresh-fish.jpeg',
    //       url: '/herbs/spices',
    //     },
    //     {
    //       name: 'fresh shell fish',
    //       img: '/assets/images/shell-fish.jpeg',
    //       url: '/herbs/spices',
    //     },
    //     {
    //       name: 'frozen & dried seafood',
    //       img: '/assets/images/frozen-and-dry-seafood.jpeg',
    //       url: '/herbs/spices',
    //     },
    //   ]
    // },
    {
      name: 'meats',
      subCategory: [
        {
          name: 'fresh poultry meat',
          img: '/assets/images/poultry-meat.jpeg',
          url: '/meats/fresh-poultry',
        },
        {
          name: 'pork meat',
          img: '/assets/images/pork-meat.jpeg',
          url: '/meats/pig',
        },
        {
          name: 'fresh goat meat',
          img: '/assets/images/goat-meat.jpeg',
          url: '/meats/fresh-goat',
        },
      ]
    },
    {
      name: 'food cupboard',
      subCategory: [
        {
          name: 'Condiment & Sauces',
          img: '/assets/images/condiment-and-sauces.jpeg',
          url: '/food-cupboard/condiments',
        },
        {
          name: 'Pasta',
          img: '/assets/images/pasta.jpeg',
          url: '/food-cupboard/pasta',
        },
        {
          name: 'Salad Dressing',
          img: '/assets/images/salad-dressing.jpeg',
          url: '/food-cupboard/salad-dressing'
        },
      ]
    },
    {
      name: 'gift store',
      subCategory: [
        {
          name: 'birthday gift',
          img: '/assets/images/birthday-gift.jpeg',
          url: '/gift-store/birthday-gift',
        },
        {
          name: 'wedding gift',
          img: '/assets/images/wedding-gift.jpeg',
          url: '/gift-store/wedding-gift',
        },
        {
          name: 'christmas gift',
          img: '/assets/images/christmas-gift.jpeg',
          url: '/gift-store/christmas-gift',
        },
      ]
    },
    // {
    //   name: 'souvenir store',
    //   subCategory: [
    //     {
    //       name: 'owambe souvenir',
    //       img: '/assets/images/owanbe-souvenir.jpeg',
    //       url: '/souvenir-store/owanbe-souvenir',
    //     },
    //     {
    //       name: 'children party souvenir',
    //       img: '/assets/images/children-party-souvenir.jpeg',
    //       url: '/souvenir-store/children-party-souvenir',
    //     },
    //     {
    //       name: 'professionals souvenir',
    //       img: '/assets/images/professional-souvenir.jpeg',
    //       url: '/souvenir-store/professional-souvenir',
    //     },
    //   ]
    // },
    {
      name: 'Restuarant at Home',
      subCategory: [
        {
          name: 'breakfast',
          img: '/assets/images/',
          url: '/restaurant/breakfast',
        },
        {
          name: 'lunch & dinner',
          img: '/assets/images/',
          url: '/restaurant/lunch-and-dinner',
        },
        // {
        //   name: 'snacks',
        //   img: '/assets/images/',
        //   url: '/restaurant/snacks',
        // },
        {
          name: 'soup',
          img: '/assets/images/christmas-gift.jpeg',
          url: '/restaurant/soup',
        },
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
