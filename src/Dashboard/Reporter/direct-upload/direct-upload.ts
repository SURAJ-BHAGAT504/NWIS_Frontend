import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-direct-upload',
  imports: [FormsModule],
  templateUrl: './direct-upload.html',
  styleUrl: './direct-upload.css'
})
export class DirectUpload {

  category: string = 'Video';
  description: string = '';
  script: string = '';

  onUpload(){
    console.log('Uploading');
  }
}
