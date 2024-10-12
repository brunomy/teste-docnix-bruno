import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartao-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './cartao-item.component.html',
  styleUrl: './cartao-item.component.scss'
})
export class CartaoItemComponent {
  @Input() principal: boolean = false;
}
