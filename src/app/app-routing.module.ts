import { BrandAddComponent } from './components/brand-add/brand-add.component';
import { HomeComponent } from './components/home/home.component';
import { CarDteailComponent } from './components/car/car-dteail/car-dteail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';

const routes: Routes = [
  { path: 'car/:carId', component: CarDteailComponent },
  {path:"car", component:CarComponent},
  {path: "", component:HomeComponent},
  {path: "home", component:HomeComponent},
  {path:"brand" ,component:BrandComponent},
  {path:"brand/add" ,component:BrandAddComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
