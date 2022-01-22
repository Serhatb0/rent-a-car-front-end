import { InvoiceModel } from './../../models/invocie/invoiceModel';
import { SingleResponseModel } from './../../models/singleResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvocieService {

  apiUrl:string="http://localhost:8080/api/invoices/"
  constructor(private httpClient:HttpClient) {}
  

  getInvocie(rentalId:number): Observable<SingleResponseModel<InvoiceModel>> {
    return this.httpClient.get<SingleResponseModel<InvoiceModel>>(
      this.apiUrl + `get-invoice-individua-customer/${rentalId}`
    );
  }
}
