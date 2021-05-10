import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Formations, SiteDePlongeeService, Speciality } from '../shared/api/site-de-plongee.service';
import  { VgApiService }  from  '@videogular/ngx-videogular/core';
import { VgPlayerComponent } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-infos-formation',
  templateUrl: './infos-formation.component.html',
  
})
export class InfosFormationComponent implements OnInit {

  public OneFormation!:Formations
  public id : any
  public preload : string = 'auto' ;
  public api !: VgApiService  ;
 
  constructor(private siteDePlongeeService:SiteDePlongeeService,private route: ActivatedRoute,private http: HttpClient, public router : ActivatedRoute) 
  {
    this.OneFormation = this.router.snapshot.data["datas"]
   
    console.log(this.OneFormation)
   }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
    // si pas de resolver faire ce qui est ci dessous
    // this.siteDePlongeeService.getOneFormation(this.id).subscribe(f => {
    //   console.log(f);
      
    //   this.OneFormation = f;
    // })
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
