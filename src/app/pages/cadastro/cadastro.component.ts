import { Component } from '@angular/core';
import { CadastroContentComponent } from '../../components/cadastro/cadastro-content.component';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { CadastroEnderecoComponent } from '../../components/cadastro-endereco/cadastro-endereco.component';
import { CadastroCartaoComponent } from '../../components/cadastro-cartao/cadastro-cartao.component';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CadastroContentComponent, CadastroEnderecoComponent, CadastroCartaoComponent, NgIf],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  url: string = '';

  constructor(public router: Router ) {
    this.url = router.url;
    console.log(this.url);
    
  }
}
