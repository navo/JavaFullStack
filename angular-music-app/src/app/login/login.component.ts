import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User();
  msg:string;
  errorMsg:string;
  
  constructor(private regService:AuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    console.log("Add new user.");
    console.log(this.user);
    this.regService.loginUser(this.user).subscribe(
      (data)=>{
      console.log("Data",data);
      this.msg=data;
      this.errorMsg=undefined;
      this.router.navigate(['dashboard'])
          },
      (error)=>{
        this.errorMsg=error.error;
      console.log(this.errorMsg);
      this.msg=undefined;
            }
      );
      
  }
  gotoregistration(){
    this.router.navigate(['registration'])
  }
  
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
    }
  


 
  
}
