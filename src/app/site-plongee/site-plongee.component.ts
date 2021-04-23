import { Component, OnInit } from '@angular/core';
import {SiteDePlongeeService} from '../shared/api/site-de-plongee.service'
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-site-plongee',
  templateUrl: './site-plongee.component.html'
})
export class SitePlongeeComponent implements OnInit {
  siteDePlongee:Array<any>=[];
  public env : string = ""
  constructor(private siteDePlongeeService:SiteDePlongeeService) {}

  ngOnInit(): void {
    this.env = environment.sitePlongeeImg
    this.getSiteDePlongee()
  }

  getSiteDePlongee(){
    return this.siteDePlongeeService.getAll()
    .subscribe(
      siteDePlongee =>{
        this.siteDePlongee = siteDePlongee.sites
      }
    )
  }

}
