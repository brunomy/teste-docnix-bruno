import { Component } from '@angular/core';
import { InputComponent } from '../formComponents/input/input.component';
import { CartaoImageComponent } from './cartao-image/cartao-image.component';

@Component({
  selector: 'app-cadastro-cartao',
  standalone: true,
  imports: [InputComponent, CartaoImageComponent],
  templateUrl: './cadastro-cartao.component.html',
  styleUrl: './cadastro-cartao.component.scss'
})
export class CadastroCartaoComponent {

}
