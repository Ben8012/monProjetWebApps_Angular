import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsPlongee } from '../shared/api/class.service';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';

@Component({
  selector: 'app-choix-formation',
  templateUrl: './choix-formation.component.html',
  
})
export class ChoixFormationComponent implements OnInit {

  eventsByTitle:EventsPlongee[]=[];

  constructor(private apiService : SiteDePlongeeService, private siteDePlongeeService:SiteDePlongeeService, private route:ActivatedRoute,) 
  {
    this.eventsByTitle = this.route.snapshot.data['datas']
   }

  ngOnInit(): void {
    
  }

  envoisMail(datas : any){
    this.apiService.postEnvoisMail(datas)
  }

}
