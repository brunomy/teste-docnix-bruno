import { Component, Input } from '@angular/core';
import { EnderecoItemComponent } from './endereco-item/endereco-item.component';
import { Endereco } from '../../../Classes/Endereco';
import { Pessoa } from '../../../Classes/Pessoa';
import { Router } from '@angular/router';
import { StorageService } from '../../../storage.service';

@Component({
  selector: 'app-endereco',
  standalone: true,
  imports: [EnderecoItemComponent],
  templateUrl: './endereco.component.html',
  styleUrl: './endereco.component.scss'
})
export class EnderecoComponent {
  @Input() endereco!: Endereco;
  @Input() pessoa!: Pessoa;

  constructor(private router: Router, private storage: StorageService) {
  }

  editar(url: string) {
    this.storage.setPessoa(this.pessoa);
    this.storage.setEndereco(this.endereco);
    this.router.navigate([url]);
  }
}
