import { CarSegmentListModel } from './../../../models/carSegment/carSegmentListModel';
import { BrandListModel } from './../../../models/brand/brandListModel';
import { ColorListModel } from './../../../models/color/colorListModel';
import { ColorService } from './../../../services/color/color.service';
import { BrandService } from 'src/app/services/brand/brand.service';
import { SegmentService } from './../../../services/segment/segment.service';
import { CarService } from './../../../services/car/car.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  colors:ColorListModel[] = []
  brands:BrandListModel[]=[]
  segments:CarSegmentListModel[]=[]


  carAddForm = new FormGroup({
    dailyPrice: new FormControl(''),
    modelYear: new FormControl(''),
    description: new FormControl(''),
    findexScore: new FormControl(''),
    kilometer: new FormControl(''),
    colorId: new FormControl(''),
    brandId: new FormControl(''),
    segmentId: new FormControl(''),
    minimumAge: new FormControl(''),


  });

  constructor(
    private carService:CarService,
    private segmentService:SegmentService,
    private brandService:BrandService,
    private colorService:ColorService,
    private formBuilder:FormBuilder

  ) { }

  ngOnInit(): void {
    this.createCarAddForm();
    this.getColors();
    this.getBrands();
    this.getSegment();
  }


  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      dailyPrice: ['', Validators.required],
      modelYear: ['', Validators.required],
      description: ['', Validators.required],
      findexScore: ['', Validators.required],
      kilometer: ['', Validators.required],
      colorId: ['', Validators.required],
      brandId: ['', Validators.required],
      segmentId: ['', Validators.required],
      minimumAge: ['', Validators.required],

    });
  }



  getColors(){
   this.colorService.getColors().subscribe(response => {
     this.colors = response.data
   })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
    })
  }

  getSegment(){
    this.segmentService.getSegment().subscribe(response => {
      this.segments = response.data;
    })
  }
}
