import { Component } from '@angular/core';
import { ImgFileComponent } from '../../formComponents/img-file/img-file.component';
import { InputComponent } from '../../formComponents/input/input.component';
import { SelectComponent } from '../../formComponents/select/select.component';

@Component({
  selector: 'app-dados-pessoais',
  standalone: true,
  imports: [ImgFileComponent, InputComponent, SelectComponent],
  
  templateUrl: './dados-pessoais.component.html',
  styleUrl: './dados-pessoais.component.scss'
})
export class DadosPessoaisComponent {

}
