import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
    private toastrService:ToastrService) {}
  ngOnInit(): void {
    this.createIndividualRegisterAddForm();
    this.createCorporateRegisterAddForm();
  }

  individualRegisterAddForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    passwordIndividual: new FormControl(''),
    emailIndividual: new FormControl(''),
  });

  corporateRegisterAddForm = new FormGroup({
    companyName: new FormControl(''),
    taxNumber: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });

  createIndividualRegisterAddForm() {
    this.individualRegisterAddForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      passwordIndividual: ['', Validators.required],
      emailIndividual: ['', Validators.required],
    });
  }

  createCorporateRegisterAddForm() {
    this.corporateRegisterAddForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      taxNumber: ['', Validators.required],
      password: ['', Validators.required ],
      email: ['', Validators.required],
    });
  }

  addIndividual() {
    let individualRegisterModel = Object.assign({}, this.individualRegisterAddForm.value);
    console.log(individualRegisterModel);
    if (this.individualRegisterAddForm.valid) {
      let individualRegisterModel = Object.assign({}, this.individualRegisterAddForm.value);
      console.log(individualRegisterModel);
      
    }else{
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }

  }

  addCorporate() {
    if (this.corporateRegisterAddForm.valid) {
      let corporateRegisterModel = Object.assign({}, this.corporateRegisterAddForm.value);
      console.log(corporateRegisterModel);
      
    }else{
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }

  }
}
