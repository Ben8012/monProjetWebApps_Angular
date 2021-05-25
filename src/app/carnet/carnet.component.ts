import { Component, OnInit } from '@angular/core';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';
import { Carnets, SiteDePlongee } from '../shared/api/class.service';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html'

})
export class CarnetComponent implements OnInit {

  carnets:Carnets[]=[]
  sites:SiteDePlongee[]=[]
  myId:number=0

  constructor(private siteDePlongeeService:SiteDePlongeeService) { }

  ngOnInit(): void {
    this.getCarnet()
  }

  getCarnet(){
    this.siteDePlongeeService.getCarnet()
    .subscribe(
      carnets =>{
        this.carnets = carnets;
        console.log(this.carnets)
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
    window.location.reload();
  }

}
