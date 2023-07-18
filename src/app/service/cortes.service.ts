import { environment } from './../../environments/environment.development';
import { Injectable } from '@angular/core';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class CortesService {
  
  constructor() {         
  }


  getCortes(){
    return [
      {
        data: '17/07/2023 (segunda-feira)',
        totalPecas: '2.248',
        pecasPorModelo: '204',
        fase: 'Não entregue',
        compraOrigem: 'Triunfo Malhas'
      }
    ];
  }

  getDistribuicao(){
    return [
      {
        dataEntrega: 'indefinida',
        modelo: 'Princesa G',
        quantidade: '204',
        constureiro: '',        
      },
      {
        dataEntrega: 'indefinida',
        modelo: '71 G',
        quantidade: '204',
        constureiro: '',        
      },
      {
        dataEntrega: 'indefinida',
        modelo: '003',
        quantidade: '204',
        constureiro: '',        
      },
      {
        dataEntrega: 'indefinida',
        modelo: 'Laço G',
        quantidade: '204',
        constureiro: '',        
      },
      {
        dataEntrega: 'indefinida',
        modelo: 'Sued',
        quantidade: '204',
        constureiro: '',        
      },
      {
        dataEntrega: 'indefinida',
        modelo: '20 quadrado',
        quantidade: '204',
        constureiro: '',        
      },
      {
        dataEntrega: 'indefinida',
        modelo: 'Laser',
        quantidade: '204',
        constureiro: '',        
      },
      {
        dataEntrega: 'indefinida',
        modelo: '32 quadrado',
        quantidade: '204',
        constureiro: '',        
      },
      {
        dataEntrega: 'indefinida',
        modelo: 'Veludo',
        quantidade: '204',
        constureiro: '',        
      },
      {
        dataEntrega: 'indefinida', modelo: 'Veludo',
        quantidade: '204', constureiro: '',        
      },
      {
        dataEntrega: 'indefinida', modelo: '50 GG',
        quantidade: '204', constureiro: '',        
      },
      {
        dataEntrega: 'indefinida', modelo: 'Princesa GG quadrado',
        quantidade: '204', constureiro: '',        
      },
      {
        dataEntrega: 'indefinida', modelo: 'Princesa de brilho GG',
        quantidade: '204', constureiro: '',        
      }
    ];
  }

  
}
