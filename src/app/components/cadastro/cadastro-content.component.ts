import { Component } from '@angular/core';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { CartaoComponent } from './cartao/cartao.component';
import { SubmitButtonComponent } from '../formComponents/submit-button/submit-button.component';


@Component({
  selector: 'app-cadastro-content',
  standalone: true,
  imports: [DadosPessoaisComponent, EnderecoComponent, CartaoComponent, SubmitButtonComponent],
  templateUrl: './cadastro-content.component.html',
  styleUrl: './cadastro-content.component.scss'
})
export class CadastroContentComponent {

}
