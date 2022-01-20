import { ToastrService } from 'ngx-toastr';
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
    private brandService: BrandService,
    private toastrService:ToastrService,
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
          if(response.success){
            this.toastrService.success(response.message, 'Başarılı');
          }else{
            this.toastrService.error(
              response.message,
              'Doğrulama hatası'
            );
          }

        
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
             
            }
          }
        }
      );
    }  else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
}
