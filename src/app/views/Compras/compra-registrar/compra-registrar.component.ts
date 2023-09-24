import { FornecedorService } from './../../../service/fornecedor-service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CompraService } from 'src/app/service/compra-service';

@Component({
  selector: 'app-compra-registrar',
  templateUrl: './compra-registrar.component.html',
  styleUrls: ['./compra-registrar.component.scss']
})
export class CompraRegistrarComponent {
  public _fornecedores: any = [];
  constructor(private router: Router,
    private compraService: CompraService,
    private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    this.carregarFornecedores();
  }

  carregarFornecedores() {
    this.fornecedorService.get().subscribe(
      (data) => {
        this._fornecedores = data;
      },
      (error) => {
        console.error('Erro ao carregar fornecedores:', error);
      }
    );
  }

}
