import { AdditionalRentalItemService } from './../../../services/additionalRentalItem/additional-rental-item.service';
import { AdditionalServiceListModel } from './../../../models/additionalService/additionalServiceListModel';
import { AdditionalServiceService } from './../../../services/additionalService/additional-service.service';
import { ActivatedRoute } from '@angular/router';
import { CarListModel } from '../../../models/car/carListModel';
import { CarService } from '../../../services/car/car.service';
import { CityService } from '../../../services/cities/city.service';
import { CityListModel } from '../../../models/city/cityListModel';
import { RentalService } from '../../../services/rentalService/rental.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css'],
})
export class RentalAddComponent implements OnInit {
  cities: CityListModel[] = [];
  additionalServices: AdditionalServiceListModel[] = [];
  car: CarListModel;
  carId: number;
  rentalId: number;
  selectedAdditional: [] = [];
  individualCustomerAddForm = new FormGroup({
    pickUpCityId: new FormControl(''),
    returnCityId: new FormControl(''),
    rentedKilometer: new FormControl(''),
    rentDate: new FormControl(''),
    customerId: new FormControl(''),
    carId: new FormControl(''),
  });

  additionalServicesAddForm = new FormGroup({
    additionalServiceListDto: new FormControl(''),
    rentalId: new FormControl(''),
  });
  constructor(
    private formBuilder: FormBuilder,
    private rentalService: RentalService,
    private cityService: CityService,
    private carService: CarService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private additionalService: AdditionalServiceService,
    private additionalRentalItemService: AdditionalRentalItemService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.carId = params['carId'];
    });

    this.getCarsById();
    this.createIndividualCustomerAddForm();
    this.getCity();
    this.getAdditionalService();
  }
  createAdditionalServicesAddForm() {
    this.additionalServicesAddForm = this.formBuilder.group({
      additionalServiceListDto: [this.selectedAdditional, Validators.required],
      rentalId: this.rentalId,
    });
  }

  createIndividualCustomerAddForm() {
    this.individualCustomerAddForm = this.formBuilder.group({
      pickUpCityId: ['', Validators.required],
      returnCityId: ['', Validators.required],
      rentedKilometer: ['', Validators.required],
      rentDate: ['', Validators.required],
      customerId: [1, Validators.required],
      carId: this.carId,
    });
  }

  add() {
    if (this.individualCustomerAddForm.valid) {
      let createIndividualCustomerModel = Object.assign(
        {},
        this.individualCustomerAddForm.value
      );

      this.rentalService
        .add(createIndividualCustomerModel)
        .subscribe((response) => {
          if (response.success) {
            this.toastrService.success(response.message, 'Başarılı');
            this.rentalId = response.data.id;
            this.addAditionalService();
          } else {
            this.toastrService.error(response.message, 'Doğrulama hatası');
          }
        });
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }

  addAditionalService() {
    this.createAdditionalServicesAddForm();

    if (this.additionalServicesAddForm.valid) {
      let createAdditionalServicesModel = Object.assign(
        {},
        this.additionalServicesAddForm.value
      );
      this.additionalRentalItemService
        .addAdditionalRentalItem(createAdditionalServicesModel)
        .subscribe((response) => {
          this.toastrService.success(response.message);
        });
    } else {
      this.toastrService.error('Formunuz Eksik', 'Dikkat');
    }
  }

  getCity() {
    this.cityService.getCity().subscribe((response) => {
      this.cities = response.data;
    });
  }
  getCarsById() {
    this.carService.getCarsById(this.carId).subscribe((response) => {
      this.car = response.data;
    });
  }
  getAdditionalService() {
    this.additionalService.getAdditionalService().subscribe((response) => {
      this.additionalServices = response.data;
    });
  }
}
