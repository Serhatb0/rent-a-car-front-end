import { InputTextModule } from 'primeng/inputtext';
import { CarModel } from './../../models/car/carModel';
import { SingleResponseModel } from './../../models/singleResponseModel';
import { CarListModel } from './../../models/car/carListModel';
import { ListResponseModel } from './../../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl: string = 'http://localhost:8080/api/cars';
  newApiUrl!: string;
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarListModel>> {
    return this.httpClient.get<ListResponseModel<CarListModel>>(
      this.apiUrl + '/getall'
    );
  }

  getCarsPage(pageNo:number,pageSize:number):Observable<ListResponseModel<CarListModel>>{
    return this.httpClient.get<ListResponseModel<CarListModel>>(
      this.apiUrl + "/getallrentalpage"
    )
  }

  getCarsById(carId:number): Observable<SingleResponseModel<CarModel>> {
    return this.httpClient.get<SingleResponseModel<CarModel>>(
      this.apiUrl + `?id=${carId}`
    );
  }
}
