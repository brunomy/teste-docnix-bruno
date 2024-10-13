import { Component, Input } from '@angular/core';
import { ProgressBarComponent } from '../../components/animacoes/progress-bar/progress-bar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-analise',
  standalone: true,
  imports: [ProgressBarComponent, NgIf],
  templateUrl: './analise.component.html',
  styleUrl: './analise.component.scss'
})
export class AnaliseComponent {

  @Input() porcentagem: number = 30;

}
