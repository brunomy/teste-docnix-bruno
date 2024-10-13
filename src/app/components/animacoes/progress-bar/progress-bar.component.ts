import { Component, Input, OnInit  } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent implements OnInit {

  @Input() porcentagem: number  = 0;
  percentString = '';

  ngOnInit(): void {
    setTimeout(() => {
      this.barra_calculate()
    }, 1000);
    this.percentString = this.porcentagem.toString();
  }

  barra_calculate() {
      const left = document.querySelector<HTMLElement>('.left div');
      const right = document.querySelector<HTMLElement>('#barra .right div');
      var rotate;
      if (this.porcentagem < 50) {
          this.porcentagem = this.porcentagem / 50;
          rotate = this.porcentagem * 180;

          if(right){
            right.style.transform = 'rotate(' + rotate + 'deg)';
          }
      } else {
          if(right){
            right.style.transform = 'rotate(180deg)';
          }
          this.porcentagem = (this.porcentagem - 50) / 50;
          rotate = this.porcentagem * 180;
          if(left){
            left.style.transform = 'rotate(' + rotate + 'deg)';
          }
      }
  }
}
