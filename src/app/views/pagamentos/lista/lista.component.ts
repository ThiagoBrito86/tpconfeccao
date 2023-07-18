import { PagamentosService } from './../../../service/pagamentos.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  public _lista: any = [];

  constructor(private router: Router, private service: PagamentosService) {}

  ngOnInit(){
    this._lista = this.service.getPagamentos();
  }
  redirectToLink(): void {
    this.router.navigateByUrl('/pagamentos/conceito');
  }
}
