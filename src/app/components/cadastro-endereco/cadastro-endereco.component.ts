import { Component, Input } from '@angular/core';
import { InputComponent } from '../formComponents/input/input.component';
import { Endereco } from '../../Classes/Endereco';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cadastro-endereco',
  standalone: true,
  imports: [InputComponent, RouterModule],
  templateUrl: './cadastro-endereco.component.html',
  styleUrl: './cadastro-endereco.component.scss'
})
export class CadastroEnderecoComponent {
  @Input() endereco!: Endereco;
}
