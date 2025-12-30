import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { Router} from '@angular/router';
import { Reporter } from '../../Service/Reporter/reporter';
import { UploadedAssignment } from '../Reporter/uploaded-assignment/uploaded-assignment';
import { DirectUpload } from '../Reporter/direct-upload/direct-upload';
import { GetDirectUpload } from '../Reporter/get-direct-upload/get-direct-upload';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, UploadedAssignment, DirectUpload, GetDirectUpload],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  currentSection: string = 'assignments';

  isSidebarOpen: boolean = false;
  isLoading: boolean = false;
  userName: string = '';
  assignments: any[] = [];

  isUploadModalOpen: boolean = false;
  selectedAssignment: any = null;

  constructor(private route: Router, private reporterService: Reporter, @Inject(PLATFORM_ID) private platformId : object){

  }

  ngOnInit()
  {
    this.fetchAssignments();
    this.userName = localStorage.getItem('userName') ?? '';
  }

  toggleSidebar(){
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  showSection(section: string){
    this.currentSection = section;
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  fetchAssignments(){
    this.isLoading = true;
    const userCode = localStorage.getItem('userCode') ?? '';
    this.reporterService.GetAssignment(userCode).subscribe({
      next: (data) => {
        this.assignments = data;
        this.isLoading = false;
      },
      error: (err) =>{
        console.error('Error fetching assignmenst:', err);
        this.isLoading = false;
      }
    })
  }

  Logout(){
    if(isPlatformBrowser(this.platformId)){
      localStorage.clear();
    }
    this.route.navigate(['login']);
  }

  openUploadModal(item: any){
    this.selectedAssignment = item;
    this.isUploadModalOpen = true;
    console.log('Upload modal open');
  }

  closeUploadModal(){
    this.isUploadModalOpen = false;
    this.selectedAssignment = null;
     console.log('Upload modal close');
  }

  submitUpload() {
    console.log('Uploading for:', this.selectedAssignment?.Strory_Id);
    alert('Upload functionality to be implemented!');
    this.closeUploadModal();
  }

  ngOnDestroy(){
    this.Logout();
    console.log('Logout');
  }
}
