import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import  { VgApiService }  from  '@videogular/ngx-videogular/core';
import { VgPlayerComponent } from '@videogular/ngx-videogular/core';
import {  SiteDePlongeeService } from '../../shared/api/api.service';
import { Formations } from '../../shared/class/class.service';
import { UserSessionService } from '../../shared/user_session/user-session.service';

@Component({
  selector: 'app-infos-formation',
  templateUrl: './infos-formation.component.html',
  
})
export class InfosFormationComponent implements OnInit {

  public OneFormation!:Formations
  public id : any
  public preload : string = 'auto' ;
  public api !: VgApiService  ;
  public user: any;
 
  constructor(private _router : Router,private siteDePlongeeService:SiteDePlongeeService,private route: ActivatedRoute,private http: HttpClient, public router : ActivatedRoute, public userSessionService:UserSessionService) 
  {
    this.OneFormation = this.router.snapshot.data["datas"]
   }
  

  ngOnInit(): void {
    if(this.OneFormation == null){
      this._router.navigate(['/app-formation']) 
    } else{
      this.id = this.route.snapshot.paramMap.get('id');
      this.userSessionService.user$.subscribe((user : any) => {
        this.user = user;
      })
    }
    
  }

  onPlayerReady(api: VgApiService) {
    this.api = api;

    // Set the volume video to 0
    this.api.volume = 0

    // Set the video to the beginning
    this.api.getDefaultMedia().currentTime = 0;
  }
}
