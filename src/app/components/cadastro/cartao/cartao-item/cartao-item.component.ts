import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CartaoImageComponent } from '../../../cadastro-cartao/cartao-image/cartao-image.component';

@Component({
  selector: 'app-cartao-item',
  standalone: true,
  imports: [NgIf, CartaoImageComponent],
  templateUrl: './cartao-item.component.html',
  styleUrl: './cartao-item.component.scss'
})
export class CartaoItemComponent {
  @Input() principal: boolean = false;
}
