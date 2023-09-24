import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }
  get() {
    return this.http.get(`${this.apiUrl}/fornecedores/1/Get`);
  }

  postData(data: any) {
    return this.http.post(`${this.apiUrl}/fornecedores`, data);
  }

}
