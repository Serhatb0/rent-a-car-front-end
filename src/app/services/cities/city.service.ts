import { ListResponseModel } from './../../models/listResponseModel';
import { Observable } from 'rxjs';
import { CityListModel } from './../../models/city/cityListModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  apiUrl:string="http://localhost:8080/api/cities/"
  constructor(private httpClient:HttpClient) {}

  getCity():Observable<ListResponseModel<CityListModel>>{
    return this.httpClient.get<ListResponseModel<CityListModel>>(this.apiUrl +"getall")
  }
  
}
