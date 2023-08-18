import { CompraService } from '../../../service/compra-service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  constructor(private router: Router, private comprasService: CompraService) { }
  public _compras: any = [];

  ngOnInit(): void {
    this.carregarCompras();
    console.log(this._compras);
  }
  redirectToLink(): void {
    this.router.navigateByUrl('/compras/conceito');
  }

  redirectToRegistrar(): void {
    this.router.navigateByUrl('/compras/registrar');
  }

  carregarCompras() {
    this.comprasService.get().subscribe(
      (data) => {
        this._compras = data;
      },
      (error) => {
        console.error('Erro ao carregar compras:', error);
      }
    );
  }
}
