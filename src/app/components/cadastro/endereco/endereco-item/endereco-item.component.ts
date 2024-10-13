import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Endereco } from '../../../../Classes/Endereco';

@Component({
  selector: 'app-endereco-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './endereco-item.component.html',
  styleUrl: './endereco-item.component.scss'
})
export class EnderecoItemComponent {
  @Input() endereco!: Endereco;
  
  constructor(){
  }

}
