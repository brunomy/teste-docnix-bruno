import { Component } from '@angular/core';
import { DadosPessoaisComponent } from './dados-pessoais/dados-pessoais.component';
import { EnderecoComponent } from './endereco/endereco.component';


@Component({
  selector: 'app-cadastro-content',
  standalone: true,
  imports: [DadosPessoaisComponent, EnderecoComponent],
  templateUrl: './cadastro-content.component.html',
  styleUrl: './cadastro-content.component.scss'
})
export class CadastroContentComponent {

}
