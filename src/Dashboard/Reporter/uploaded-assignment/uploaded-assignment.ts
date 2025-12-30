import { Component } from '@angular/core';
import { Reporter } from '../../../Service/Reporter/reporter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uploaded-assignment',
  imports: [CommonModule],
  templateUrl: './uploaded-assignment.html',
  styleUrl: './uploaded-assignment.css'
})
export class UploadedAssignment {

  currentSection: string = 'uploadedAssignments';
  isSidebarOpen: boolean = false;
  isLoading: boolean = false;
  assignments: any[] = [];

  uploadedAssignment: any[] = [];

  constructor(private reporterService: Reporter){}

  ngOnInit(){
      this.fetchUploadedAssignment();
  }

  fetchUploadedAssignment(){
    this.isLoading = true;
    const userCode = localStorage.getItem('userCode') ?? '';
    this.reporterService.GetUploadedAssignment(userCode).subscribe({
      next: (data) =>{
        this.uploadedAssignment = data;
        this.isLoading = false;
      },
      error: (err) =>{
        console.log('Error fetching uploaded assignment', err);
        this.isLoading = false;
      }
    })
    console.log('Fetching uploaded assignment')
  }
}
