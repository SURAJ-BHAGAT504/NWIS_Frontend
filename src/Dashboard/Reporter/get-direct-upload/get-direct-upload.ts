import { Component } from '@angular/core';
import { Reporter } from '../../../Service/Reporter/reporter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-direct-upload',
  imports: [CommonModule],
  templateUrl: './get-direct-upload.html',
  styleUrl: './get-direct-upload.css'
})
export class GetDirectUpload {

  currentSection: string = 'getdirectupload';
  isSidebarOpen: boolean = false;
  isLoading: boolean = false;
  directUpload: any[] = [];

  constructor(private reportedService: Reporter){}

  ngOnInit() {
    this.fetchDirectUpload();
  }

  fetchDirectUpload() {
    this.isLoading = true;
    const userCode = localStorage.getItem('userCode') ?? '';
    this.reportedService.GetDirectUpload(userCode).subscribe({
      next: (data) =>{
        this.directUpload = data;
        this.isLoading = false;
      },
      error: (err) =>{
        console.log('Error fetching direct upload:', err);
        this.isLoading = false;
      }
    })
    console.log('Fetching direct upload')
  }
}
