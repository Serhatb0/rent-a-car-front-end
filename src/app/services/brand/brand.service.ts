import { ResponseModel } from './../../models/responseModel';
import { CreateBrandModel } from './../../models/brand/createBrandModel';
import { BrandListModel } from '../../models/brand/brandListModel';
import { ListResponseModel } from './../../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl:string="http://localhost:8080/api/brands/"
  constructor(private httpClient:HttpClient) {}

  getBrands():Observable<ListResponseModel<BrandListModel>>{
    return this.httpClient.get<ListResponseModel<BrandListModel>>(this.apiUrl +"getall")
  }

  add(createBrandModel:CreateBrandModel):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",createBrandModel)
    
  }
}
