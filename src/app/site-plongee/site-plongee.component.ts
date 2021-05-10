import { Component, OnInit } from '@angular/core';
import {SiteDePlongee, SiteDePlongeeService} from '../shared/api/site-de-plongee.service'
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-site-plongee',
  templateUrl: './site-plongee.component.html'
})
export class SitePlongeeComponent implements OnInit {
  siteDePlongee:SiteDePlongee[]=[];
  constructor(private siteDePlongeeService:SiteDePlongeeService,) {}

  ngOnInit(): void {
    this.getSiteDePlongee()
    
  }

  getSiteDePlongee(){
    this.siteDePlongeeService.getSite()
    .subscribe(
      siteDePlongee =>{
        this.siteDePlongee = siteDePlongee
      }
    )
    
  }
  
}
