import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'


import {CarouselModule} from 'primeng/carousel';
import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {TabMenuModule} from 'primeng/tabmenu';
import {DropdownModule } from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastrModule} from "ngx-toastr";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { CarDteailComponent } from './components/car/car-dteail/car-dteail.component';
import { NaviComponent } from './components/navi/navi.component';
import { HomeComponent } from './components/home/home.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { RentalAddComponent } from './components/rental-add/rental-add.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityComponent } from './components/city/city.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    CarDteailComponent,
    NaviComponent,
    HomeComponent,
    BrandAddComponent,
    ColorAddComponent,
    RentalAddComponent,
    CityComponent,
    CarAddComponent,

  ],
  imports: [
    MessagesModule,
    MessageModule,
    InputNumberModule,
    CalendarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    TabMenuModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataViewModule,
    DropdownModule,
    TabViewModule,
    InputTextModule,
    RatingModule,
    ButtonModule,
    PanelModule,
    PasswordModule,
    CardModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
    
    
   
    
  ],
  
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
