import { Component, Input } from '@angular/core';
import { CartaoItemComponent } from './cartao-item/cartao-item.component';
import { Cartao } from '../../../Classes/Cartao';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartao',
  standalone: true,
  imports: [CartaoItemComponent],
  templateUrl: './cartao.component.html',
  styleUrl: './cartao.component.scss'
})
export class CartaoComponent {
  @Input() cartao!: Cartao;

  constructor(private router: Router){
  }

  editar(url: string) {
    this.router.navigate([url]);
  }
}
