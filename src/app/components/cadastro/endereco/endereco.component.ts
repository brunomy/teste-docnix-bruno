import { Component, Input } from '@angular/core';
import { EnderecoItemComponent } from './endereco-item/endereco-item.component';
import { Endereco } from '../../../Classes/Endereco';
import { Pessoa } from '../../../Classes/Pessoa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-endereco',
  standalone: true,
  imports: [EnderecoItemComponent],
  templateUrl: './endereco.component.html',
  styleUrl: './endereco.component.scss'
})
export class EnderecoComponent {
  @Input() endereco!: Endereco;

  constructor(private router: Router) {
  }

  editar(url: string) {
    this.router.navigate([url]);
  }
}
