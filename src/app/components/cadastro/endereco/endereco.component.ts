import { Component } from '@angular/core';
import { EnderecoItemComponent } from './endereco-item/endereco-item.component';

@Component({
  selector: 'app-endereco',
  standalone: true,
  imports: [EnderecoItemComponent],
  templateUrl: './endereco.component.html',
  styleUrl: './endereco.component.scss'
})
export class EnderecoComponent {

}
