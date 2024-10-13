import { Component, OnInit } from '@angular/core';
import { CadastroContentComponent } from '../../components/cadastro/cadastro-content.component';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { CadastroEnderecoComponent } from '../../components/cadastro-endereco/cadastro-endereco.component';
import { CadastroCartaoComponent } from '../../components/cadastro-cartao/cadastro-cartao.component';
import { SubmitButtonComponent } from '../../components/formComponents/submit-button/submit-button.component';
import { LogoComponent } from '../../components/animacoes/logo/logo.component';
import { Pessoa } from '../../Classes/Pessoa';
import { Endereco } from '../../Classes/Endereco';
import { StorageService } from '../../storage.service';
import { Cartao } from '../../Classes/Cartao';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CadastroContentComponent, CadastroEnderecoComponent, CadastroCartaoComponent, SubmitButtonComponent, LogoComponent, NgIf],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent implements OnInit {
  url: string = '';
  pessoa: Pessoa = new Pessoa();
  endereco: Endereco = new Endereco();
  cartao: Cartao = new Cartao()

  constructor(public router: Router, private storage: StorageService) {
    this.url = router.url;
  }

  ngOnInit(): void {
    if(this.storage.getPessoa())
      this.pessoa = this.storage.getPessoa();
    else
      this.pessoa = new Pessoa();

    if(this.storage.getEndereco())
      this.endereco = this.storage.getEndereco();
    else
      this.endereco = new Endereco();

    if(this.storage.getCartao())
      this.cartao = this.storage.getCartao();
    else
      this.cartao = new Cartao();
  }
}
