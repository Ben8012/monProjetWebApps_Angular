import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsPlongee } from '../../shared/class/class.service';
import { SiteDePlongeeService } from '../../shared/api/api.service';

@Component({
  selector: 'app-choix-specialitee',
  styleUrls: ['./choix-specialitee.component.scss'],
  templateUrl: './choix-specialitee.component.html',
  
})
export class ChoixSpecialiteeComponent implements OnInit {

  eventsBySpeciality:EventsPlongee[]=[];

  constructor(private apiService : SiteDePlongeeService, private route:ActivatedRoute, private router:Router) 
  {
    this.eventsBySpeciality = this.route.snapshot.data['datas']
   }

  ngOnInit(): void {
    
  }

  envoisMail(datas : any){
    this.apiService.postEnvoisMail(datas)
    this.router.navigate(['/app-formation']);
  }

}
