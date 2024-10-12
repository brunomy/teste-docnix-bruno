import { Component } from '@angular/core';
import { InputComponent } from '../formComponents/input/input.component';
import { SubmitButtonComponent } from '../formComponents/submit-button/submit-button.component';

@Component({
  selector: 'app-cadastro-endereco',
  standalone: true,
  imports: [InputComponent, SubmitButtonComponent],
  templateUrl: './cadastro-endereco.component.html',
  styleUrl: './cadastro-endereco.component.scss'
})
export class CadastroEnderecoComponent {

}
