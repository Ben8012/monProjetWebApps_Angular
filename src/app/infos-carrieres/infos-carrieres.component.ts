import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { SiteDePlongee, SiteDePlongeeService} from '../shared/api/site-de-plongee.service'
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-infos-carrieres',
  templateUrl: './infos-carrieres.component.html',
  
})
export class InfosCarrieresComponent implements OnInit {

  public OneSiteDePlongee!:SiteDePlongee
  public id : any 

  constructor(private siteDePlongeeService:SiteDePlongeeService,private route: ActivatedRoute,private http: HttpClient, public router : ActivatedRoute )
  {
    this.OneSiteDePlongee = this.router.snapshot.data["datas"]
  }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');

  }

  ouvreNouvelOnglet(){
    window.open(this.OneSiteDePlongee.site_web);
  }

  
}


