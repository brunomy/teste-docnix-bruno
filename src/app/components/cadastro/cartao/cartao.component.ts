import { Component } from '@angular/core';
import { CartaoItemComponent } from './cartao-item/cartao-item.component';

@Component({
  selector: 'app-cartao',
  standalone: true,
  imports: [CartaoItemComponent],
  templateUrl: './cartao.component.html',
  styleUrl: './cartao.component.scss'
})
export class CartaoComponent {

}
