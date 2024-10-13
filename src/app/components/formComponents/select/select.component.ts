import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input() valor: any;
  @Output() valorEmitt = new EventEmitter<any>();
  @Input() label: string = '';


  valorAlterado(){
    this.valorEmitt.emit(this.valor);
  }
}
