import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-button',
  standalone: true,
  imports: [],
  templateUrl: './edit-button.component.html',
  styleUrl: './edit-button.component.scss'
})
export class EditButtonComponent {
  @Input() url: string = '';

  constructor(private router: Router) {
  }

  editar(url: string) {
    this.router.navigate([url]);
  }
}
