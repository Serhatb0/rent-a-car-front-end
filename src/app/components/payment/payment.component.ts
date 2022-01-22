import { RentalListModel } from './../../models/rental/rentalListModel';
import { RentalService } from './../../services/rentalService/rental.service';
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
import { InvocieService } from 'src/app/services/invoice/invocie.service';
import { InvoiceModel } from 'src/app/models/invocie/invoiceModel';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  data: Date = new Date();
  dataLoaded:boolean = false
  rentalId:number
  invoices:InvoiceModel;
  rental:RentalListModel
  promsyonId:number

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
    private route:ActivatedRoute,
    private invocieService:InvocieService,
    private rentalService:RentalService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.rentalId = params["rentalId"];
    })
    this.rentalFindById();
    this.createPaymentAddForm();

    setTimeout(() => {
    this.createInvoice();

    }, 5000);
    
 
  }

  createPaymentAddForm() {
    this.paymentAddForm = this.formBuilder.group({
      paymentDate: [this.data, Validators.required],
      rentalId: [this.rentalId, Validators.required],
      promosyonId: [this.promsyonId, Validators.required],
      expirationDate: ['', Validators.required],
      cardNumber: [, Validators.required],
      cardName: ['', Validators.required],
      cvv: ['', Validators.required],
    
    });
  }

  createInvoice(){
    this.invocieService.getInvocie(this.rentalId).subscribe(response => {
      this.dataLoaded =false
      this.invoices = response.data
      this.dataLoaded = true
    })
  }

  add() {
    
    if (this.paymentAddForm.valid) {
      let createPaymentModel = Object.assign({}, this.paymentAddForm.value);
      console.log(createPaymentModel);
      
      this.paymentService.add(createPaymentModel).subscribe((response) => {
        if (response.success) {
          this.toastrService.success(response.message, 'Başarılı');
        } else {
          this.toastrService.error(response.message, 'Doğrulama hatası');
        }
      });
    } else {
      let createPaymentModel = Object.assign({}, this.paymentAddForm.value);
      console.log(createPaymentModel);
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }
  rentalFindById(){
    this.rentalService.findById(this.rentalId).subscribe(response => {
      this.rental = response.data
      this.promsyonId = this.rental.promosyonId
    this.createPaymentAddForm();
      
    })
  }
}
