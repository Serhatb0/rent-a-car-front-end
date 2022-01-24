import { CreateAdditionalRentalItemModel } from './../../models/additionalService/createAdditionalRentalItemModel';

import { BrandListModel } from './../../models/brand/brandListModel';
import { AdditionalServiceListModel } from './../../models/additionalService/additionalServiceListModel';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdditionalServiceService {
  apiUrl:string="http://localhost:8080/api/additionalservices/"
  constructor(private httpClient:HttpClient) { }

  getAdditionalService():Observable<ListResponseModel<AdditionalServiceListModel>>{
    return this.httpClient.get<ListResponseModel<AdditionalServiceListModel>>(this.apiUrl +"getall")
  }
 
}
