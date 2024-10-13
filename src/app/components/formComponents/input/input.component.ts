import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { UtilService } from '../../../util.service';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() label: string = '';
  @Input() valor: any;
  @Output() valorEmitt = new EventEmitter<any>();
  invalid: boolean = false;

  constructor(public util: UtilService){}

  valorAlterado(): void {
    if(this.label == 'E-mail'){
      this.invalid = this.util.validarEmail(this.valor)
    }
    if(this.label == 'Data de nascimento'){
      this.valor = this.util.maskData(this.valor)
      if(this.valor.length != 10)
        this.invalid = true;
      else
        this.invalid = false;
    }
    if(this.label == 'Telefone'){
      this.valor = this.util.maskTelefone(this.valor)
      
      if(this.valor.length < 14)
        this.invalid = true;
      else
        this.invalid = false;
    }
    if(this.label == 'CPF'){
      this.valor = this.util.maskCPF(this.valor)
      
      if(this.valor.length < 14)
        this.invalid = true;
      else
        this.invalid = !this.util.validaCPF(this.valor)
    }
    if(this.label == 'CEP'){
      this.valor = this.util.maskCEP(this.valor);
      
      if(this.valor.length < 9)
        this.invalid = true;
      else
        this.invalid = false;
    }

    if(this.label == 'Número do cartão'){
      this.valor = this.util.maskCartao(this.valor);
      
      if(this.valor.length < 16)
        this.invalid = true;
      else
        this.invalid = false;
    }
    if(this.label == 'Vencimento'){
      this.valor = this.util.maskVencimento(this.valor);
      console.log(this.valor.length);
      
      if(this.valor.length < 5)
        this.invalid = true;
      else
        this.invalid = false;
    }
    if(this.label == 'CRV'){
      this.valor = this.util.maskCRV(this.valor);
      console.log(this.valor.length);
      
      if(this.valor.length < 3)
        this.invalid = true;
      else
        this.invalid = false;
    }

    this.valorEmitt.emit(this.valor);
  }
}
