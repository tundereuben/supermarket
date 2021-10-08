import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { FooterComponent } from './footer/footer.component';
import { CulinaryComponent } from './herbs/culinary/culinary.component';
import { MedicinalComponent } from './herbs/medicinal/medicinal.component';
import { SpicesComponent } from './herbs/spices/spices.component';
import { FruitsComponent } from './vegetables/fruits/fruits.component';
import { AllVegetablesComponent } from './vegetables/all-vegetables/all-vegetables.component';
import { FourteenHealthestComponent } from './vegetables/fourteen-healthest/fourteen-healthest.component';
import { FreshPoultryComponent } from './meats/fresh-poultry/fresh-poultry.component';
import { FreshCowComponent } from './meats/fresh-cow/fresh-cow.component';
import { FreshGoatComponent } from './meats/fresh-goat/fresh-goat.component';
import { PigComponent } from './meats/pig/pig.component';
import { BirthdayGiftComponent } from './gift-store/birthday-gift/birthday-gift.component';
import { WeddingGiftComponent } from './gift-store/wedding-gift/wedding-gift.component';
import { ChristmasGiftComponent } from './gift-store/christmas-gift/christmas-gift.component';
import { SpecialOccassionComponent } from './gift-store/special-occassion/special-occassion.component';
import { OwambeSouvenirComponent } from './souvenir-store/owambe-souvenir/owambe-souvenir.component';
import { ChildrenPartySouvenirComponent } from './souvenir-store/children-party-souvenir/children-party-souvenir.component';
import { ProfessionalSouvenirComponent } from './souvenir-store/professional-souvenir/professional-souvenir.component';
import { ArtisanSouvenirComponent } from './souvenir-store/artisan-souvenir/artisan-souvenir.component';
import { HomeComponent } from './home/home.component';
import { NaijaVegetablesComponent } from './vegetables/naija-vegetables/naija-vegetables.component';
import { CondimentComponent } from './food-cupboard/condiment/condiment.component';
import { PastaComponent } from './food-cupboard/pasta/pasta.component';
import { SaladDressingComponent } from './food-cupboard/salad-dressing/salad-dressing.component';
import { BreakfastComponent } from './restaurant/breakfast/breakfast.component';
import { LunchDinnerComponent } from './restaurant/lunch-dinner/lunch-dinner.component';
import { SnacksComponent } from './restaurant/snacks/snacks.component';
import { SoupComponent } from './restaurant/soup/soup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeCarouselComponent,
    HomeCardsComponent,
    FooterComponent,
    CulinaryComponent,
    MedicinalComponent,
    SpicesComponent,
    FruitsComponent,
    AllVegetablesComponent,
    FourteenHealthestComponent,
    FreshPoultryComponent,
    FreshCowComponent,
    FreshGoatComponent,
    PigComponent,
    WeddingGiftComponent,
    ChristmasGiftComponent,
    SpecialOccassionComponent,
    OwambeSouvenirComponent,
    ChildrenPartySouvenirComponent,
    ProfessionalSouvenirComponent,
    ArtisanSouvenirComponent,
    HomeComponent,
    NaijaVegetablesComponent,
    CondimentComponent,
    PastaComponent,
    SaladDressingComponent,
    BirthdayGiftComponent,
    BreakfastComponent,
    LunchDinnerComponent,
    SnacksComponent,
    SoupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
