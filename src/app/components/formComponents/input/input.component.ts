import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

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

  valorAlterado(): void {
    this.valorEmitt.emit(this.valor);

    if(this.label == 'E-mail'){
      this.invalid = this.validarEmail()
    }
  }

  validarEmail() {
    let usuario = this.valor.substring(0, this.valor.indexOf("@"));
    let dominio = this.valor.substring(this.valor.indexOf("@")+ 1, this.valor.length);

    if (
      (usuario.length >=1) &&
      (dominio.length >=3) &&
      (usuario.search("@")==-1) &&
      (dominio.search("@")==-1) &&
      (usuario.search(" ")==-1) &&
      (dominio.search(" ")==-1) &&
      (dominio.search(".")!=-1) &&
      (dominio.indexOf(".") >=1)&&
      (dominio.lastIndexOf(".") < dominio.length - 1)
    ) {
      return false;
    }
    return true;
  }
}
