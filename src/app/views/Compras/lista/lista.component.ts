import { ComprasService } from './../../../service/compras.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  constructor(private router: Router, private service: ComprasService) { }
  public _compras: any = [];
  ngOnInit() {
    this._compras = this.service.getCompras();
  }

  redirectToLink(): void {
    this.router.navigateByUrl('/compras/conceito');
  }

  redirectToRegistrar(): void {
    this.router.navigateByUrl('/compras/registrar');
  }
}
