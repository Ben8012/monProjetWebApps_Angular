import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  { VgApiService }  from  '@videogular/ngx-videogular/core';
import { VgPlayerComponent } from '@videogular/ngx-videogular/core';
import {  SiteDePlongeeService } from '../shared/api/site-de-plongee.service';
import { Formations } from '../shared/api/class.service';
import { UserSessionService } from '../shared/api/user-session.service';

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
 
  constructor(private siteDePlongeeService:SiteDePlongeeService,private route: ActivatedRoute,private http: HttpClient, public router : ActivatedRoute, public userSessionService:UserSessionService) 
  {
    this.OneFormation = this.router.snapshot.data["datas"]
   }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userSessionService.user$.subscribe((user : any) => {
      this.user = user;
    })
    console.log(this.user)
  }

  onPlayerReady(api: VgApiService) {
    this.api = api;

    this.api.getDefaultMedia().subscriptions.ended.subscribe(
        () => {
            // Set the video to the beginning
            this.api.getDefaultMedia().currentTime = 0;
        }
    );
  }

}
