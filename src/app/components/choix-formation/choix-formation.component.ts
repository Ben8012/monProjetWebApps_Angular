import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { EventsPlongee } from '../../shared/class/class.service';
import { SiteDePlongeeService } from '../../shared/api/api.service';

@Component({
  selector: 'app-choix-formation',
  styleUrls: ['./choix-formation.component.scss'],
  templateUrl: './choix-formation.component.html',
  
})
export class ChoixFormationComponent implements OnInit {

  eventsByTitle:EventsPlongee[]=[];
 
  constructor(private apiService : SiteDePlongeeService, private route:ActivatedRoute, private router:Router) 
  {
    this.eventsByTitle = this.route.snapshot.data['datas']
   }

  ngOnInit(): void {
    
  }

  envoisMail(datas : any){
    this.apiService.postEnvoisMail(datas)
    this.router.navigate(['/app-formation']);
  }

  
}
