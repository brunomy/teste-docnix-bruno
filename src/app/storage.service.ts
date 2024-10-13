import { Injectable } from '@angular/core';
import { Pessoa } from './Classes/Pessoa';
import { Endereco } from './Classes/Endereco';
import { Cartao } from './Classes/Cartao';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private pessoa!: Pessoa;
  private endereco!: Endereco;
  private cartao!: Cartao;

  constructor() { }

  setPessoa(pessoa: Pessoa) : void {
    this.pessoa = pessoa;
  }
  setEndereco(endereco: Endereco) : void {
    this.endereco = endereco;
  }
  setCartao(cartao: Cartao) : void {
    this.cartao = cartao;
  }

  getPessoa() : Pessoa {
    return this.pessoa;
  }
  getEndereco() : Endereco {
    return this.endereco;
  }
  getCartao() : Cartao {
    return this.cartao;
  }

}
