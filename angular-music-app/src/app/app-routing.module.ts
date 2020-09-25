import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import {LoginComponent} from './login/login.component'
import {DashboardComponent} from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { UserbioComponent } from './userbio/userbio.component';

const routes: Routes = [
  {path:'search',component:SearchComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'editprofile',component:EditprofileComponent},
  {path:'bio',component:UserbioComponent}
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
