import { FornecedorService } from './../../../service/fornecedor-service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { cilDisabled } from '@coreui/icons';
import { CompraService } from 'src/app/service/compra-service';

@Component({
  selector: 'app-compra-registrar',
  templateUrl: './compra-registrar.component.html',
  styleUrls: ['./compra-registrar.component.scss']
})
export class CompraRegistrarComponent {
  compraForm: FormGroup;
  public _fornecedores: any = [];  
  constructor(private router: Router,
    private compraService: CompraService,
    private fornecedorService: FornecedorService,
    private fb: FormBuilder) { 

      this.compraForm = this.fb.group({
        data: ['', Validators.required],
        fornecedorId: [0, Validators.required],
        peso: [null, [Validators.required, Validators.min(1)]],
        preco: [null, [Validators.required, Validators.min(1)]],
        total: [null, Validators.min(1)]
      });

      this.compraForm.get('peso')?.valueChanges.subscribe(() => this.calcularTotal());
      this.compraForm.get('preco')?.valueChanges.subscribe(() => this.calcularTotal());
    }

    calcularTotal() {
      const peso = this.compraForm.get('peso')?.value;
      const preco = this.compraForm.get('preco')?.value;      
      const total = peso && preco ? peso * preco : null;
      this.compraForm.get('total')?.setValue(total);
    }
    

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

  salvar(){    
    this.compraService.postData(this.compraForm.value).subscribe(
      (response) => {
        console.log('Compra salva com sucesso:', response);        
      },
      (error) => {
        console.error('Erro ao salvar a compra:', error);        
      }
    );
  }

  onSelecaoChange() {
    const valorSelecionado = this.compraForm.get('fornecedorId')?.value;    
    
  }

  get pesoControl(): FormControl | null {
    return this.compraForm.get('valor') as FormControl;
  }

}
