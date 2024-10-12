import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-endereco-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './endereco-item.component.html',
  styleUrl: './endereco-item.component.scss'
})
export class EnderecoItemComponent {

  @Input() principal: boolean = false;

  constructor(){
    console.log(this.principal);
    
  }

}
