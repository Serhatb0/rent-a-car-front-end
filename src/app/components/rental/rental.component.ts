import { ToastrService } from 'ngx-toastr';
import { CityService } from './../../services/cities/city.service';
import { CarService } from './../../services/car/car.service';
import { CityListModel } from './../../models/city/cityListModel';
import { RentalListModel } from './../../models/rental/rentalListModel';
import { RentalService } from '../../services/rentalService/rental.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { SelectItem } from 'primeng/api';
@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',

  styleUrls: ['./rental.component.scss'],
})
export class RentalComponent implements OnInit {
  rentals: RentalListModel[] = [];
  rental: RentalListModel;
  rentalDteail: boolean;
  dataLoaded: boolean;
  pickUpCityName: string;
  returnCityName: string;
  rentedKilometer: number;
  rentDate: Date;
  returnDate: Date;
  dailyPrice: number;
  cities: CityListModel[] = [];
  rentalAddForm = new FormGroup({
    id: new FormControl(''),
    pickUpCityId: new FormControl(''),
    returnCityId: new FormControl(''),
    rentedKilometer: new FormControl(''),
    rentDate: new FormControl(''),
    customerId: new FormControl(''),
    carId: new FormControl(''),
    returnedKilometer: new FormControl(''),
    returnDate: new FormControl(''),
  });
  constructor(
    private rentalService: RentalService,
    private formBuilder: FormBuilder,
    private carService: CarService,
    private cityService: CityService,
    private toastrService:ToastrService
  ) {}

  ngOnInit(): void {
    this.getRentals();
    this.getCity();
    this.createRentalAddForm();
  }
  createRentalAddForm() {
    this.rentalAddForm = this.formBuilder.group({
      id:[this.rental.id,Validators.required],
      pickUpCityId: [this.rental.pickUpCityId, Validators.required],
      returnCityId: [this.rental.returnCityId, Validators.required],
      rentedKilometer: ['', Validators.required],
      rentDate: ['', Validators.required],
      customerId: [1, Validators.required],
      carId: [this.rental.carId, Validators.required],
      returnedKilometer: ['', Validators.required],
      returnDate: ['', Validators.required],
    });
  }

  hideRentalDteail() {
    this.rentalDteail = false;
  }
  showRentalDteail(rentalId: number) {
    this.getRentalsById(rentalId);
    this.createRentalAddForm();
    this.pickUpCityName = this.rental.pickUpCityName;
    this.returnCityName = this.rental.returnCityName;
    this.rentedKilometer = this.rental.rentedKilometer;
    this.dailyPrice = this.rental.carDailyPrice;
    this.returnDate = new Date();
    this.rentDate = new Date(this.rental.rentDate);
    this.rentalDteail = true;
  }
  getRentals() {
    this.rentalService.getRentals().subscribe((response) => {
      this.rentals = response.data;
    });
  }
  getCity() {
    this.cityService.getCity().subscribe((response) => {
      this.dataLoaded = false;
      this.cities = response.data;
      this.dataLoaded = true;
    });
  }
  getRentalsById(rentalId) {
    this.rental = this.rentals.find((x) => x.id === rentalId);
    console.log(this.rental);
    
  }

  add() {
    let createRentalModel = Object.assign({}, this.rentalAddForm.value);
    console.log(createRentalModel);

    if (this.rentalAddForm.valid) {
      let updateRentalModel = Object.assign({}, this.rentalAddForm.value);

      this.rentalService.update(updateRentalModel).subscribe((response) => {
        if (response.success) {
          this.toastrService.success(response.message, 'Başarılı');
        } else {
          this.toastrService.error(response.message, 'Doğrulama hatası');
        }
      });
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}
