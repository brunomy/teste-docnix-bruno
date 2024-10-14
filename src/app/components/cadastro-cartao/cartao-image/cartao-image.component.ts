import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Cartao } from '../../../Classes/Cartao';
import { UtilService } from '../../../util.service';

@Component({
  selector: 'app-cartao-image',
  standalone: true,
  imports: [],
  templateUrl: './cartao-image.component.html',
  styleUrl: './cartao-image.component.scss'
})
export class CartaoImageComponent {
  @Input() cartao!: Cartao;
  bandeira: string = '';

  constructor(public util: UtilService){
  }

}
