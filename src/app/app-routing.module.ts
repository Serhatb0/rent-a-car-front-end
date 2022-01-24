import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { RentalComponent } from './components/rental/rental.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { RentalAddComponent } from './components/rental/rental-add/rental-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { HomeComponent } from './components/home/home.component';
import { CarDteailComponent } from './components/car/car-dteail/car-dteail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { CityComponent } from './components/city/city.component';

const routes: Routes = [
  { path: 'car/:carId', component: CarDteailComponent },
  {path:"cars", component:CarComponent},

  {path: "", component:HomeComponent},
  {path: "home", component:HomeComponent},
  {path:"brand" ,component:BrandComponent},
  {path:"brand/add" ,component:BrandAddComponent},
  {path:"color/add" ,component:ColorAddComponent},
  {path:"rental/:carId" ,component:RentalAddComponent},
  {path:"city" ,component:CityComponent},
  {path:"cars/add",component:CarAddComponent },
  {path:"payment/:rentalId",component:PaymentComponent },
  {path:"rentals",component:RentalComponent },
  {path:"pricing",component:PricingComponent},
  {path:"contact",component:ContactComponent},
  {path:"blog",component:BlogComponent},









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
