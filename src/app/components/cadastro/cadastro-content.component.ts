import { Component, Input } from '@angular/core';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { CartaoComponent } from './cartao/cartao.component';
import { SubmitButtonComponent } from '../formComponents/submit-button/submit-button.component';
import { Pessoa } from '../../Classes/Pessoa';
import { Endereco } from '../../Classes/Endereco';


@Component({
  selector: 'app-cadastro-content',
  standalone: true,
  imports: [DadosPessoaisComponent, EnderecoComponent, CartaoComponent, SubmitButtonComponent],
  templateUrl: './cadastro-content.component.html',
  styleUrl: './cadastro-content.component.scss'
})
export class CadastroContentComponent {
  @Input() pessoa!: Pessoa;
  @Input() endereco!: Endereco;

  constructor() {
  }
}
