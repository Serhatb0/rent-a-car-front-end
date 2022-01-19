import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {PasswordModule} from 'primeng/password';

import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {RatingModule} from 'primeng/rating';
import {ButtonModule} from 'primeng/button';

import {TabViewModule} from 'primeng/tabview';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './components/car/car.component';
import { Dropdown, DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CarComponent
  ],
  imports: [
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
    PasswordModule
   
    
  ],
  
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
