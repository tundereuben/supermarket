import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondimentComponent } from './food-cupboard/condiment/condiment.component';
import { CulinaryComponent } from './herbs/culinary/culinary.component';
import { MedicinalComponent } from './herbs/medicinal/medicinal.component';
import { SpicesComponent } from './herbs/spices/spices.component';
import { HomeComponent } from './home/home.component';
import { FreshCowComponent } from './meats/fresh-cow/fresh-cow.component';
import { FreshGoatComponent } from './meats/fresh-goat/fresh-goat.component';
import { FreshPoultryComponent } from './meats/fresh-poultry/fresh-poultry.component';
import { PigComponent } from './meats/pig/pig.component';
import { ArtisanSouvenirComponent } from './souvenir-store/artisan-souvenir/artisan-souvenir.component';
import { ChildrenPartySouvenirComponent } from './souvenir-store/children-party-souvenir/children-party-souvenir.component';
import { OwambeSouvenirComponent } from './souvenir-store/owambe-souvenir/owambe-souvenir.component';
import { ProfessionalSouvenirComponent } from './souvenir-store/professional-souvenir/professional-souvenir.component';
import { BeveragesComponent } from './food-cupboard/beverages/beverages.component';
import { CerealComponent } from './food-cupboard/cereal/cereal.component';
import { AllVegetablesComponent } from './vegetables/all-vegetables/all-vegetables.component';
import { FourteenHealthestComponent } from './vegetables/fourteen-healthest/fourteen-healthest.component';
import { FruitsComponent } from './vegetables/fruits/fruits.component';
import { NaijaVegetablesComponent } from './vegetables/naija-vegetables/naija-vegetables.component';
import { DiaryComponent } from './food-cupboard/diary/diary.component';
import { FlourComponent } from './food-cupboard/flour/flour.component';
import { GrainsComponent } from './food-cupboard/grains/grains.component';
import { OilComponent } from './food-cupboard/oil/oil.component';
import { PastaComponent } from './food-cupboard/pasta/pasta.component';
import { SaladDressingComponent } from './food-cupboard/salad-dressing/salad-dressing.component';
import { SausageAndHotDogComponent } from './food-cupboard/sausage-and-hot-dog/sausage-and-hot-dog.component';
import { TubersComponent } from './food-cupboard/tubers/tubers.component';
import { BirthdayGiftComponent } from './gift-store/birthday-gift/birthday-gift.component';
import { ChristmasGiftComponent } from './gift-store/christmas-gift/christmas-gift.component';
import { SpecialOccassionComponent } from './gift-store/special-occassion/special-occassion.component';
import { WeddingGiftComponent } from './gift-store/wedding-gift/wedding-gift.component';
import { BreakfastComponent } from './restaurant/breakfast/breakfast.component';
import { LunchDinnerComponent } from './restaurant/lunch-dinner/lunch-dinner.component';
import { SnacksComponent } from './restaurant/snacks/snacks.component';
import { SoupComponent } from './restaurant/soup/soup.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'herbs/culinary', component: CulinaryComponent},
  { path: 'herbs/medicinal', component: MedicinalComponent},
  { path: 'herbs/spices', component: SpicesComponent},
  
  { path: 'vegetables/all-vegetables', component: AllVegetablesComponent},
  { path: 'vegetables/fourteen-healthiest', component: FourteenHealthestComponent},
  { path: 'vegetables/fruits', component: FruitsComponent},
  { path: 'vegetables/naija-vegetables', component: NaijaVegetablesComponent},
  
  { path: 'meats/fresh-cow', component: FreshCowComponent},
  { path: 'meats/fresh-goat', component: FreshGoatComponent},
  { path: 'meats/fresh-poultry', component: FreshPoultryComponent},
  { path: 'meats/pig', component:PigComponent },
  
  { path: 'souvenir-store/artisan-souvenir', component:ArtisanSouvenirComponent },
  { path: 'souvenir-store/children-party-souvenir', component:ChildrenPartySouvenirComponent },
  { path: 'souvenir-store/owanbe-souvenir', component:OwambeSouvenirComponent },
  { path: 'souvenir-store/professional-souvenir', component:ProfessionalSouvenirComponent },
  { path: 'souvenir-store/professional-souvenir', component:ProfessionalSouvenirComponent },
  
  { path: 'food-cupboard/beverages', component:BeveragesComponent },
  { path: 'food-cupboard/cereal', component: CerealComponent },
  { path: 'food-cupboard/condiments', component: CondimentComponent },
  { path: 'food-cupboard/dairy', component: DiaryComponent },
  { path: 'food-cupboard/flour', component: FlourComponent },
  { path: 'food-cupboard/grains', component: GrainsComponent },
  { path: 'food-cupboard/oil', component: OilComponent },
  { path: 'food-cupboard/pasta', component: PastaComponent },
  { path: 'food-cupboard/salad-dressing', component: SaladDressingComponent },
  { path: 'food-cupboard/sausage-and-hot-dog', component:  SausageAndHotDogComponent },
  { path: 'food-cupboard/tubers', component: TubersComponent },

  { path: 'gift-store/birthday-gift', component: BirthdayGiftComponent },
  { path: 'gift-store/christmas-gift', component: ChristmasGiftComponent },
  { path: 'gift-store/special-occassion', component: SpecialOccassionComponent },
  { path: 'gift-store/wedding-gift', component: WeddingGiftComponent },

  { path: 'restaurant/breakfast', component: BreakfastComponent },
  { path: 'restaurant/lunch-and-dinner', component: LunchDinnerComponent },
  { path: 'restaurant/snacks', component: SnacksComponent },
  { path: 'restaurant/soup', component: SoupComponent },









  





  






  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
