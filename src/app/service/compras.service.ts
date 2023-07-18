import { environment } from './../../environments/environment.development';
import { Injectable } from '@angular/core';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  
  constructor() {         
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
