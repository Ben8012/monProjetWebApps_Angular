import { Component, OnInit } from '@angular/core';
import {SiteDePlongeeService} from '../shared/api/site-de-plongee.service'

@Component({
  selector: 'app-site-plongee',
  templateUrl: './site-plongee.component.html'
})
export class SitePlongeeComponent implements OnInit {
  siteDePlongee:Array<any>=[];
  constructor(private siteDePlongeeService:SiteDePlongeeService) { }

  ngOnInit(): void {
    this.getSiteDePlongee()
  }

  getSiteDePlongee(){
    return this.siteDePlongeeService.getAll()
    .subscribe(
      siteDePlongee =>{
        console.log(siteDePlongee.sites)
        this.siteDePlongee = siteDePlongee.sites
      }
    )
  }

}
