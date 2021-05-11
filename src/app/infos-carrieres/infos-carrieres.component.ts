import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {  SiteDePlongeeService} from '../shared/api/site-de-plongee.service';
import { SiteDePlongee } from '../shared/api/class.service';


@Component({
  selector: 'app-infos-carrieres',
  templateUrl: './infos-carrieres.component.html',
  
})
export class InfosCarrieresComponent implements OnInit {

  public OneSiteDePlongee!:SiteDePlongee
  public id : any 

  constructor(private siteDePlongeeService:SiteDePlongeeService,private route: ActivatedRoute,private http: HttpClient)
  {
    this.OneSiteDePlongee = this.route.snapshot.data["datas"]
  }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');

  }

  ouvreNouvelOnglet(){
    window.open(this.OneSiteDePlongee.site_web);
  }

  
}


