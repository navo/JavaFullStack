import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    menuItems:String[]=['search','dashboard'];
    
      constructor(private Router:Router, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private breakpointObserver: BreakpointObserver,public authenticationService: AuthenticationService){
      this.mobileQuery = media.matchMedia('(max-width: 600px)');
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener)

    }


  mobileQuery: MediaQueryList;
  title = 'music-app';
  private _mobileQueryListener: () => void;

  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  async ngOnInit(): Promise<void> {
    
    this.Router.navigate(['/dashboard']);
    

}
async logout() {
  
  this.authenticationService.logout();
  console.log(this.authenticationService.currentUser);
  console.log("logout");
  this.Router.navigate(['/login']);
  
}

async login(){
  
  console.log(this.authenticationService.currentUser);
  this.Router.navigate(['/login']);
}
async edituser(){
  this.Router.navigate(['/editprofile']);
  
}
async bio()
{
  this.Router.navigate(['/bio']);
}

}
