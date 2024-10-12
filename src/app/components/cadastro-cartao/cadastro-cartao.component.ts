import { Component } from '@angular/core';
import { InputComponent } from '../formComponents/input/input.component';
import { SubmitButtonComponent } from '../formComponents/submit-button/submit-button.component';

@Component({
  selector: 'app-cadastro-cartao',
  standalone: true,
  imports: [InputComponent, SubmitButtonComponent],
  templateUrl: './cadastro-cartao.component.html',
  styleUrl: './cadastro-cartao.component.scss'
})
export class CadastroCartaoComponent {

}
