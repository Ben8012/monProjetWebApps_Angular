import { Component, OnInit } from '@angular/core';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';
import { Carnets, SiteDePlongee } from '../shared/api/class.service';
import { UserSessionService } from '../shared/api/user-session.service';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html'

})
export class CarnetComponent implements OnInit {

  carnets:Carnets[]=[]
  sites:SiteDePlongee[]=[]
  myId:number=0
  user:any

  constructor(private siteDePlongeeService:SiteDePlongeeService , private userSessionService : UserSessionService) { }

  ngOnInit(): void {
    this.user = this.userSessionService.user
    this.getCarnet()
  }

  getCarnet(){
    this.siteDePlongeeService.getCarnet(this.user.userId)
    .subscribe(
      carnets =>{
        this.carnets = carnets;
      }
    )
  }

  getSite(){
    this.siteDePlongeeService.getSite()
    .subscribe(
      sites=>{
        this.sites= sites
      }
    )
  }

  deleteCarnet(id: any){
    this.siteDePlongeeService.deleteCarnet(id)
    this.getCarnet()
    //window.location.reload();
  }

}
