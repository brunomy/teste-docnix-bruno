import { Component, Input } from '@angular/core';
import { ProgressBarComponent } from '../../components/animacoes/progress-bar/progress-bar.component';
import { NgIf } from '@angular/common';
import { StorageService } from '../../storage.service';
import { Pessoa } from '../../Classes/Pessoa';

@Component({
  selector: 'app-analise',
  standalone: true,
  imports: [ProgressBarComponent, NgIf],
  templateUrl: './analise.component.html',
  styleUrl: './analise.component.scss'
})
export class AnaliseComponent {
  pessoa: Pessoa;
  porcentagem: number = 0;

  constructor(storage: StorageService){
    this.pessoa = storage.getPessoa();
    this.consultarScore();
  }

  consultarScore(){
    this.pessoa.setScore(this.getRandomInteger(0, 1000));
    this.porcentagem = Math.floor((this.pessoa.getScore() / 1000) * 100);
  }

  getRandomInteger(min: number, max: number): number {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
