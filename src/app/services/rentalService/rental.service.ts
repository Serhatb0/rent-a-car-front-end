import { SingleResponseModel } from './../../models/singleResponseModel';
import { UpdateRentalModel } from './../../models/rental/updateRentalModel';
import { RentalListModel } from './../../models/rental/rentalListModel';
import { ResponseModel } from '../../models/responseModel';
import { CreateIndividualCustomerModel } from '../../models/rental/createIndividualCustomerModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl: string = 'http://localhost:8080/api/rentals/';
  constructor(private httpClient: HttpClient) {}

  getRentals():Observable<ListResponseModel<RentalListModel>>{
    return this.httpClient.get<ListResponseModel<RentalListModel>>(this.apiUrl +"getall")
  }

  add(createIndividualCustomerModel:CreateIndividualCustomerModel):Observable<SingleResponseModel<RentalListModel>>{
    return this.httpClient.post<SingleResponseModel<RentalListModel>>(this.apiUrl+"addIndividualCustomer",createIndividualCustomerModel)
    
  }

  update(updateRentalModel:UpdateRentalModel):Observable<ResponseModel>{
    return this.httpClient.put<ResponseModel>(this.apiUrl+"update",updateRentalModel)
    
  }

  findById(id:number):Observable<SingleResponseModel<RentalListModel>>{
    return this.httpClient.get<SingleResponseModel<RentalListModel>>(this.apiUrl +`?id=${id}`)
  }


}
