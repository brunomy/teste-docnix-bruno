import { Component, Input } from '@angular/core';
import { InputComponent } from '../formComponents/input/input.component';
import { CartaoImageComponent } from './cartao-image/cartao-image.component';
import { Cartao } from '../../Classes/Cartao';
import { Router } from '@angular/router';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-cadastro-cartao',
  standalone: true,
  imports: [InputComponent, CartaoImageComponent],
  templateUrl: './cadastro-cartao.component.html',
  styleUrl: './cadastro-cartao.component.scss'
})
export class CadastroCartaoComponent {
  @Input() cartao!: Cartao;

  constructor(private router: Router, private storage: StorageService){}

  submit(url: string) {
    this.storage.setCartao(this.cartao);
    this.router.navigate([url]);
  }
}
