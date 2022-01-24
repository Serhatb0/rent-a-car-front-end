import { CarListModel } from './../../../models/car/carListModel';
import { CarModel } from './../../../models/car/carModel';
import { CarService } from '../../../services/car/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
@Component({
  selector: 'app-car-dteail',
  templateUrl: './car-dteail.component.html',
  styleUrls: ['./car-dteail.component.css']
})
export class CarDteailComponent implements OnInit {
  car!:CarModel;
  cars:CarListModel[] = []
  carId:any
  segmentName:string
  dataLoaded:boolean =false;
  constructor(private carService:CarService,private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.carId = params["carId"];
    })

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    
    this.getCarsById();
    
   
    
  }

  getCarsById(){
    this.carService.getCarsById(this.carId).subscribe(response => {
      this.dataLoaded = false
      this.car =response.data;
      this.dataLoaded = true;
      this.segmentName = response.data.segmentName
      this.findCarBySegmentName();
   
    })
  }

  findCarBySegmentName(){
    this.carService.findBySegmentName(this.segmentName).subscribe(response => {
      this.cars = response.data      
    })
  }
  relod(){
    window.location.reload();
  }

}
