import { environment } from './../../environments/environment.development';
import { Injectable } from '@angular/core';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PagamentosService {
  
  constructor() {         
  }


  getPagamentos(){
    return [
      {
        vencimento: '14/08/2023 (segunda-feira)',
        fornecedor: 'Triunfo Malhas',
        total: '25.117,98',
        pago: '12.425,00',
        pendente: '12.692,98',
        status: 'Em aberto',
        venceEmdias: '10 dias',
        parciais: [
          {data: '28/07/2023', valor: '815,00', tipo:'crédito'},
          {data: '03/08/2023', valor: '3.910,00', tipo:'cheque'},
          {data: '03/08/2023', valor: '5.000,00', tipo:'pix'},
          {data: '04/08/2023', valor: '1.5,00,00', tipo:'pix'},
          {data: '04/08/2023', valor: '1.200,00', tipo:'dinheiro'}          
        ]
      }
    ];
  }
  
}
