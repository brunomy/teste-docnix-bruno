import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-img-file',
  standalone: true,
  imports: [NgIf],
  templateUrl: './img-file.component.html',
  styleUrl: './img-file.component.scss'
})
export class ImgFileComponent {
  base64String: string | null = null;
  selectedFile: File | null = null;

  constructor(){
  }
  

  onFileChange(event: Event): void {
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
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      alert('Por favor, selecione um arquivo.');
    }
  }
}
