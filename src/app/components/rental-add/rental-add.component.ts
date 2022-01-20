import { ActivatedRoute } from '@angular/router';
import { CarListModel } from './../../models/car/carListModel';
import { CarService } from './../../services/car/car.service';
import { CityService } from './../../services/cities/city.service';
import { CityListModel } from './../../models/city/cityListModel';
import { RentalService } from './../../services/reantalService/rental.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css'],
})
export class RentalAddComponent implements OnInit {
  cities:CityListModel[]=[]
  car: CarListModel;
  carId:number
  individualCustomerAddForm = new FormGroup({
    pickUpCityId: new FormControl(''),
    returnCityId: new FormControl(''),
    rentedKilometer: new FormControl(''),
    rentDate: new FormControl(''),
    customerId: new FormControl(''),
    carId: new FormControl(''),
  });
  constructor(
    private formBuilder: FormBuilder,
    private rentalService: RentalService,
    private cityService:CityService,
    private carService:CarService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.carId = params["carId"];
    })
this.getCarsById();
    this.createIndividualCustomerAddForm();
    this.getCity();
    
  }

  createIndividualCustomerAddForm() {
    this.individualCustomerAddForm = this.formBuilder.group({
      pickUpCityId: ['', Validators.required],
      returnCityId: ['', Validators.required],
      rentedKilometer: ['', Validators.required],
      rentDate: ['', Validators.required],
      customerId: ['', Validators.required],
      carId:this.carId,
    });
  }

  add() {
    if (this.individualCustomerAddForm.valid) {
      let createIndividualCustomerModel = Object.assign(
        {},
        this.individualCustomerAddForm.value
      );

      this.rentalService.add(createIndividualCustomerModel).subscribe(
        (response) => {
          console.log('Eklendi');
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              console.log('hatalı');
            }
          }
          
          console.log('hatalı');
        }
      );
    } else {
      console.log('Form Eksik');
    }
   }

   getCity(){
    this.cityService.getCity().subscribe(response => {
      this.cities =response.data;
    })
  }
  getCarsById(){
    this.carService.getCarsById(this.carId).subscribe(response => {
      this.car = response.data
    })
  }
}
