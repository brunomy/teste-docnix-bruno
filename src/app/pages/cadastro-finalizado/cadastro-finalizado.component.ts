import { Component } from '@angular/core';
import { ImgFileComponent } from '../../components/formComponents/img-file/img-file.component';
import { StorageService } from '../../storage.service';
import { Pessoa } from '../../Classes/Pessoa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-finalizado',
  standalone: true,
  imports: [ImgFileComponent],
  templateUrl: './cadastro-finalizado.component.html',
  styleUrl: './cadastro-finalizado.component.scss'
})
export class CadastroFinalizadoComponent {

  pessoa: Pessoa;

  constructor(public storage: StorageService, private router: Router){
    this.pessoa = storage.getPessoa()
  }

  submit(url: string) {
    this.router.navigate([url]);
  }


}
