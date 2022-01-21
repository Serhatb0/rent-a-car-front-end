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
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {ProgressSpinnerModule} from 'primeng/progressspinner';




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
import { RentalAddComponent } from './components/rental/rental-add/rental-add.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CityComponent } from './components/city/city.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RentalComponent } from './components/rental/rental.component';

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
    PaymentComponent,
    RentalComponent,

  ],
  imports: [
    ProgressSpinnerModule,
    BrowserModule,
    RadioButtonModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    InputTextareaModule,
    ConfirmDialogModule,
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
