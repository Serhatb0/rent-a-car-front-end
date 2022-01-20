import { ResponseModel } from '../../models/responseModel';
import { CreateIndividualCustomerModel } from '../../models/rental/createIndividualCustomerModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl: string = 'http://localhost:8080/api/rentals/';
  constructor(private httpClient: HttpClient) {}

 

  add(createIndividualCustomerModel:CreateIndividualCustomerModel):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"addIndividualCustomer",createIndividualCustomerModel)
    
  }
}
