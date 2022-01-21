import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PaymentService } from './../../services/payment/payment.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  data: Date = new Date();
  rentalId:number

  paymentAddForm = new FormGroup({
    paymentDate: new FormControl(''),
    rentalId: new FormControl(''),
    promosyonId: new FormControl(''),
    expirationDate: new FormControl(''),
    cardNumber: new FormControl(''),
    cardName: new FormControl(''),
    cvv: new FormControl(''),
  });
  constructor(
    private paymentService: PaymentService,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.rentalId = params["rentalId"];
    })
    this.createPaymentAddForm();
 
  }

  createPaymentAddForm() {
    this.paymentAddForm = this.formBuilder.group({
      paymentDate: [this.data, Validators.required],
      rentalId: [27, Validators.required],
      promosyonId: [0, Validators.required],
      expirationDate: ['', Validators.required],
      cardNumber: [, Validators.required],
      cardName: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }

  add() {
    if (this.paymentAddForm.valid) {
      let createPaymentModel = Object.assign({}, this.paymentAddForm.value);

      this.paymentService.add(createPaymentModel).subscribe((response) => {
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
