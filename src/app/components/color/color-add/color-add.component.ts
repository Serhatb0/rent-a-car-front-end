import { ColorService } from './../../../services/color/color.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {
  colorAddForm = new FormGroup({
    name: new FormControl(''),
   
  });
  constructor(private formBuilder:FormBuilder,private colorService:ColorService) { }

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm() {
    this.colorAddForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  add() {
    if (this.colorAddForm.valid) {
      let createColorModel = Object.assign({}, this.colorAddForm.value);
      console.log(createColorModel);
      
      this.colorService.add(createColorModel).subscribe(
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
