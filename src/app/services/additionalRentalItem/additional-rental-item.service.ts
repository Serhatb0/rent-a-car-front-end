import { ResponseModel } from './../../models/responseModel';
import { Observable } from 'rxjs';
import { CreateAdditionalRentalItemModel } from './../../models/additionalService/createAdditionalRentalItemModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdditionalRentalItemService {
  apiUrl:string="http://localhost:8080/api/additionalRentalItems/"
  constructor(private httpClient:HttpClient) { }

  addAdditionalRentalItem(createAdditionalRentalItemModel:CreateAdditionalRentalItemModel):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add" ,createAdditionalRentalItemModel)
  } 
}
