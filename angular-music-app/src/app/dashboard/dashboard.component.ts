import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { FavouriteService } from '../service/favourite.service';
import { SearchServiceService } from '../service/search-service.service';
import { Album, Artist, Data, Image, Playlist, Search, SearchResults, Track, AlbumLinks } from '../model/artist'
import { User } from '../model/user';
import { Favourite } from '../model/favourite';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,  OnChanges {
  fav:Favourite=new Favourite();
  playlist: Playlist[] = [];
  playlistlink: string[] = [];
  user: User = new User();
  userstr: string;

  constructor(private search: SearchServiceService, public authservice: AuthenticationService, private favourite: FavouriteService,private router:Router) {
        this.userstr = (JSON.stringify(this.authservice.currentUserValue).replace(/(?:\\[rn])+/g, ''));
    this.user = JSON.parse(JSON.parse(this.userstr));
    
  }
 async ngOnChanges(): Promise<void> {

  }

 async ngOnInit(): Promise<void> {

    this.favourite.viewfav(this.user.emailId).subscribe(
      (data) => {
        console.log(data);
        this.playlistlink=JSON.parse(data);
        console.log(this.playlistlink);
        for (let index = 0; index < this.playlistlink.length; index++) {
          const element = this.playlistlink[index];
          console.log(element);
          this.search.getplaylistobj(element).subscribe(
            Response => {
              console.log(Response);
              this.playlist.push(Response.playlists[0]);
            }
          );
        }
      }
    );  
  }

  async delfav(hreflink:string){
    console.log(hreflink);
    this.fav.userId=this.user.emailId;
    this.fav.id=hreflink;
    console.log(this.fav);
    this.favourite.delfav(this.fav).subscribe(
      (data) =>{
        console.log(data);
      }
    );
    this.router.navigateByUrl('/search', { skipLocationChange: true }).then(() => {
    this.router.navigate(['/dashboard']);
  }); 
  }

}
