import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { SiteDePlongeeService } from '../../shared/api/api.service';
import {SiteDePlongee } from '../../shared/class/class.service';

@Component({
  selector: 'app-site-plongee',
  templateUrl: './site-plongee.component.html',
  styleUrls :['./site-plongee.component.scss']
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
