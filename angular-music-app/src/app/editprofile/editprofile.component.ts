import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';
import {User} from '../model/user';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  edituser:User=new User();
  editusers:string;
  msg: any;
  errorMsg: any;
  constructor(public authservice:AuthenticationService,private router:Router) { 
  console.log(authservice.currentUserValue);
   this.editusers=(JSON.stringify(authservice.currentUserValue).replace(/(?:\\[rn])+/g, ''));
   console.log("User data",this.editusers);
   this.edituser=JSON.parse(JSON.parse(this.editusers));
   console.log(this.edituser);
  }
  
  ngOnInit(): void {
    
  }
  submitchanges(){
    this.authservice.editUser(this.edituser).subscribe(
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


}
