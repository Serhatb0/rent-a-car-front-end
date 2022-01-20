import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { BrandService } from 'src/app/services/brand/brand.service';
@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css'],
})
export class BrandAddComponent implements OnInit {
  

  brandAddForm = new FormGroup({
    name: new FormControl(''),
   
  });
  constructor(
    private formBuilder: FormBuilder,
    private brandService: BrandService
  ) {}

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm() {
    this.brandAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  add() {
    if (this.brandAddForm.valid) {
      let createBrandModel = Object.assign({}, this.brandAddForm.value);
      console.log(createBrandModel);
      
      this.brandService.add(createBrandModel).subscribe(
        (response) => {
          console.log('Eklendi');
        },
        (responseError) => {
          // if (responseError.error.Errors.length > 0) {
          //   for (let i = 0; i < responseError.error.Errors.length; i++) {
          //     console.log('hatalı');
          //   }
          // }
          //     
          console.log('hatalı');
        }
      );
    } else {
      console.log('Form Eksik');
    }
  }
}
