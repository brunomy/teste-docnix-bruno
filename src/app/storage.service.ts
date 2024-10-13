import { Injectable } from '@angular/core';
import { Pessoa } from './Classes/Pessoa';
import { Endereco } from './Classes/Endereco';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private pessoa!: Pessoa;
  private endereco!: Endereco;

  constructor() { }

  setPessoa(pessoa: Pessoa) : void {
    this.pessoa = pessoa;
  }
  setEndereco(endereco: Endereco) : void {
    this.endereco = endereco;
  }

  getPessoa() : Pessoa {
    return this.pessoa;
  }
  getEndereco() : Endereco {
    return this.endereco;
  }
}
