import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-img-file',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './img-file.component.html',
  styleUrl: './img-file.component.scss'
})
export class ImgFileComponent implements OnInit  {
  base64String: string = '';
  selectedFile: File | null = null;

  @Input() valor!: string;
  @Output() valorEmitt = new EventEmitter<string>();

  constructor(){
  }

  ngOnInit(): void {
    this.base64String = this.valor;
  }
  

  valorAlterado(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];
    }
    this.convertToBase64()
  }

  convertToBase64(): void {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        // A string result inclui o tipo MIME, por isso pegamos apenas a parte Base64
        this.base64String = (reader.result as string).split(',')[1];
        this.valorEmitt.emit(this.base64String);
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      alert('Por favor, selecione um arquivo.');
    }
  }
}
