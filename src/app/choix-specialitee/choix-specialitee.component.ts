import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsPlongee } from '../shared/api/class.service';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';

@Component({
  selector: 'app-choix-specialitee',
  templateUrl: './choix-specialitee.component.html',
  
})
export class ChoixSpecialiteeComponent implements OnInit {

  eventsBySpeciality:EventsPlongee[]=[];

  constructor(private apiService : SiteDePlongeeService, private route:ActivatedRoute,) 
  {
    this.eventsBySpeciality = this.route.snapshot.data['datas']
   }

  ngOnInit(): void {
    //console.log(this.eventsBySpeciality)
  }

  envoisMail(datas : any){
    //this.apiService.postEnvoisMail(datas)
  }

}
