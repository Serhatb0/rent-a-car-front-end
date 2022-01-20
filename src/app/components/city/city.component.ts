import { CityListModel } from './../../models/city/cityListModel';
import { CityService } from './../../services/cities/city.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities:CityListModel[]=[];
 
  constructor(private cityService:CityService) { }

  ngOnInit(): void {
    this.getCity();
   
    
  }

  getCity(){
    this.cityService.getCity().subscribe(response => {
      this.cities =response.data;
    })
  }
 

}
