import { Component, OnInit } from '@angular/core';
import {SiteDePlongee, SiteDePlongeeService} from '../shared/api/site-de-plongee.service'
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-site-plongee',
  templateUrl: './site-plongee.component.html'
})
export class SitePlongeeComponent implements OnInit {
  siteDePlongee:SiteDePlongee[]=[];
  public env : string = ""
  constructor(private siteDePlongeeService:SiteDePlongeeService,) {}

  ngOnInit(): void {
    this.env = environment.sitePlongeeImg
    this.getSiteDePlongee()
  }

  getSiteDePlongee(){
    return this.siteDePlongeeService.getSite()
    .subscribe(
      siteDePlongee =>{
        this.siteDePlongee = siteDePlongee
      }
    )
  }

}
