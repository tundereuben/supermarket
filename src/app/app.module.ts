import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductDashboardComponent } from './dashboard/product-dashboard/product-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchComponent } from './search/search.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { SingleProductComponent } from './single-product/single-product.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { CartStatusComponent } from './cart-status/cart-status.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import {FlutterwaveModule} from 'flutterwave-angular-v3';
import {authInterceptorProviders} from './_helpers/auth.interceptors';
import {AuthGuardService} from './services/auth-guard.service';
import { LoginStatusComponent } from './top-header/login-status/login-status.component';
import { PaymentSuccessfulComponent } from './payment/payment-successful/payment-successful.component';
import { UserDetailsComponent } from './auth/user-details/user-details.component';
import { RegisterSuccessComponent } from './auth/register-success/register-success.component';
import { ActivationSuccessComponent } from './auth/activation-success/activation-success.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductDashboardComponent,
    PageNotFoundComponent,
    SearchComponent,
    SingleProductComponent,
    SubCategoryComponent,
    CartStatusComponent,
    CartItemComponent,
    CartDetailsComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    PaymentComponent,
    LoginStatusComponent,
    PaymentSuccessfulComponent,
    UserDetailsComponent,
    RegisterSuccessComponent,
    ActivationSuccessComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlutterwaveModule
  ],
  providers: [ authInterceptorProviders, AuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
