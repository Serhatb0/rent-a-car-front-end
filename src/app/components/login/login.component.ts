import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createIndividualLoginAddForm();
    this.createCorporateLoginAddForm();
  }

  individualLoginAddForm = new FormGroup({
    firstName: new FormControl(''),
    passwordIndividual: new FormControl(''),
  });

  corporateLoginAddForm = new FormGroup({
    companyName: new FormControl(''),
    password: new FormControl(''),
  });

  createIndividualLoginAddForm() {
    this.individualLoginAddForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      passwordIndividual: ['', Validators.required],
    });
  }

  createCorporateLoginAddForm() {
    this.corporateLoginAddForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      password: ['', Validators.required ],
    });
  }

  addIndividual() {

    if (this.individualLoginAddForm.valid) {
      let individualLoginModel = Object.assign({}, this.individualLoginAddForm.value);
      console.log(individualLoginModel);
      
    }else{
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }

  }

  addCorporate() {
    if (this.corporateLoginAddForm.valid) {
      let corporateLoginModel = Object.assign({}, this.corporateLoginAddForm.value);
      console.log(corporateLoginModel);
      
    }else{
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }

  }

}
