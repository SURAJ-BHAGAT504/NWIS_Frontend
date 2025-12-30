import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../Service/Login/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  isLoading = false;
  ErrorMessage = '';

  constructor(private LoginService: Auth, private router: Router) {
  }

  LoginForm: FormGroup = new FormGroup({
    Email: new FormControl("",[Validators.required]),
    Password: new FormControl("",[Validators.required, Validators.minLength(8)]),
  });

  OnSubmit() {
    if(this.LoginForm.invalid){
      return;
    }

    this.isLoading = true;
    this.ErrorMessage = "";

    this.LoginService.Login(this.LoginForm.value).subscribe({
      next: (response: any)=> {
          this.isLoading = false;

          if(response.value === true){
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('userCode', response.userCode);
            localStorage.setItem('userId', response.userId);
            localStorage.setItem('userName', response.userName);
            console.log(response.token);
            console.log(response.userCode)
            this.router.navigate(['dashboard']);
          }
          else{
            this.ErrorMessage = response.message || 'Invalid Credential';
          }
      },
      error: (error)=>{
        this.isLoading = false;

        if(error.status === 403){
          this.ErrorMessage = error.error || 'You are not active user of this poartal'
        }
        else if(error.status === 400){
          this.ErrorMessage = "Id and Password cannot be empty";
        }
        else{
          this.ErrorMessage = 'Connection failed. Is the API running?'
        }
      }
    });
  }
}
