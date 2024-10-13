import { Component, Input } from '@angular/core';
import { InputComponent } from '../formComponents/input/input.component';
import { Endereco } from '../../Classes/Endereco';
import { Router, RouterModule } from '@angular/router';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-cadastro-endereco',
  standalone: true,
  imports: [InputComponent, RouterModule],
  templateUrl: './cadastro-endereco.component.html',
  styleUrl: './cadastro-endereco.component.scss'
})
export class CadastroEnderecoComponent {
  @Input() endereco!: Endereco;

  constructor(private router: Router, private storage: StorageService){}

  submit(url: string) {
    this.storage.setEndereco(this.endereco);
    this.router.navigate([url]);
  }
}
