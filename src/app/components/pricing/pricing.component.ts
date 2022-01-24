import { CarListModel } from './../../models/car/carListModel';
import { CarService } from './../../services/car/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  cars:CarListModel[] = []
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCars();
  }



  getCars(){
    this.carService.getCars().subscribe(response=> {
      this.cars = response.data;
    })
  }
}
