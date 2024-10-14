import { Component, Input } from '@angular/core';
import { EnderecoItemComponent } from './endereco-item/endereco-item.component';
import { Endereco } from '../../../Classes/Endereco';
import { Router } from '@angular/router';
import { EditButtonComponent } from '../../formComponents/edit-button/edit-button.component';

@Component({
  selector: 'app-endereco',
  standalone: true,
  imports: [EnderecoItemComponent, EditButtonComponent],
  templateUrl: './endereco.component.html',
  styleUrl: './endereco.component.scss'
})
export class EnderecoComponent {
  @Input() endereco!: Endereco;

  constructor(private router: Router) {
  }

}
