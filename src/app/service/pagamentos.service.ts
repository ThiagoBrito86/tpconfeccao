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
        tipoPagamento: 'crédito',
        status: 'Em Aberto',
        venceEmdias: '22 dias'
      }
    ];
  }
  
}
