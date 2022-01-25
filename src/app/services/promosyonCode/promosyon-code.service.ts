import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromosyonCodeService {
  apiUrl:string="http://localhost:8080/api/promosyonCodes"
  constructor(private httpClient:HttpClient) {}

  checkIfPromoCode(promosyonCode:string):Observable<Boolean>{
    return this.httpClient.get<Boolean>(this.apiUrl+`?promoCode=${promosyonCode}`)
    
  }

} 
