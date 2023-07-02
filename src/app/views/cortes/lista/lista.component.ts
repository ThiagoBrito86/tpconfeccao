import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {
  constructor(private router: Router) {}
  redirectToLink(): void {
    this.router.navigateByUrl('/cortes/conceito');
  }
}
