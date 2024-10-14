import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { NgIf } from '@angular/common';
import { LogoComponent } from '../../components/animacoes/logo/logo.component';
import { InputComponent } from '../../components/formComponents/input/input.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, LogoComponent, InputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router){
  }

  irParaCadastro(){
    this.router.navigate(['/cadastro']);
  }
}
