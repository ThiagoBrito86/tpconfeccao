import { CortesService } from './../../../service/cortes.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  public _lista: any = [];
  public _listaDistribuicao: any = [];

  constructor(private router: Router, private service: CortesService) { }

  ngOnInit() {
    this._lista = this.service.getCortes();
    this._listaDistribuicao = this.service.getDistribuicao();
  }
  redirectToLink(): void {
    this.router.navigateByUrl('/cortes/conceito');
  }
}
