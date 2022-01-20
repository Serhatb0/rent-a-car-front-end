import { Observable } from 'rxjs';
import { ListResponseModel } from './../../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarSegmentListModel } from 'src/app/models/carSegment/carSegmentListModel';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {
  apiUrl:string="http://localhost:8080/api/carSegments/"

  constructor(private httpClient:HttpClient) { 

  }

  getSegment():Observable<ListResponseModel<CarSegmentListModel>>{
    return this.httpClient.get<ListResponseModel<CarSegmentListModel>>(this.apiUrl +"getall")
  }
}
