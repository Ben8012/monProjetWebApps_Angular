import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  { VgApiService }  from  '@videogular/ngx-videogular/core';
import { VgPlayerComponent } from '@videogular/ngx-videogular/core';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';
import {  Speciality } from '../shared/api/class.service';

@Component({
  selector: 'app-infos-specialite',
  templateUrl: './infos-specialite.component.html',
})
export class InfosSpecialiteComponent implements OnInit {

  public OneSpeciality!:Speciality
  public idSpeciality :any
  public preload : string = 'auto' 
  public api !: VgApiService  
  
  constructor(private siteDePlongeeService:SiteDePlongeeService,private route: ActivatedRoute,private http: HttpClient, public router : ActivatedRoute)
   {
    this.OneSpeciality = this.router.snapshot.data["datas"]
    }

  ngOnInit(): void {
    this.idSpeciality = this.route.snapshot.paramMap.get('id');
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
