import { CarAddComponent } from './components/car/car-add/car-add.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component';
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
  {path:"car", component:CarComponent},
  {path: "", component:HomeComponent},
  {path: "home", component:HomeComponent},
  {path:"brand" ,component:BrandComponent},
  {path:"brand/add" ,component:BrandAddComponent},
  {path:"color/add" ,component:ColorAddComponent},
  {path:"car/rental/:carId" ,component:RentalAddComponent},
  {path:"city" ,component:CityComponent},
  {path:"cars/add",component:CarAddComponent }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
