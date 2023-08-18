import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompraService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }
//https://localhost:7150/api/Compras/1/Get
  get() {
    return this.http.get(`${this.apiUrl}/compras/1/Get`);
  }

  postData(data: any) {
    return this.http.post(`${this.apiUrl}/compras`, data);
  }

  getCompras(){
    return [
      {
        id: 1,
        data: '14/07/2023',
        malharia: 'Triunfo Malhas',
        total: '20.900,25',
        peso: '663,50',
        preco: '31,50'
      },
      {
        id: 2,
        data: '14/07/2023',
        malharia: 'Triunfo Malhas',
        total: '4.217,73',
        peso: '127,81',
        preco: '33,00'
      }
    ];
  }
}
