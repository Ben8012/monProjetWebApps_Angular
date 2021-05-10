import { Component, OnInit } from '@angular/core';
import { SiteDePlongeeService, Carnets, SiteDePlongee } from '../shared/api/site-de-plongee.service';

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
        this.carnets = carnets
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

  updateCarnet(){

  }

  deleteCarnet(id: any){
    this.siteDePlongeeService.deleteCarnet(id)
  }

  retrouveID(){
    console.log('coucou')
    this.carnets.forEach(c=>{
      this.sites.forEach(s=>{
        
       if (c.lieux==s.nom){
         this.myId = s.id
       }
      }) 
    })
   return this.myId
  }
  

}
