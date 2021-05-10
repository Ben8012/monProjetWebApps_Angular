import { Component, OnInit } from '@angular/core';
import { Formations, SiteDePlongeeService, Speciality } from '../shared/api/site-de-plongee.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  
})
export class FormationComponent implements OnInit {

  formations:Formations[]=[];
  specialitys:Speciality[]=[];

  constructor(private siteDePlongeeService:SiteDePlongeeService) { }

  ngOnInit(): void {
   this.getFormation()
   this.getSpeciality()
  }

  getFormation(){
    this.siteDePlongeeService.getFormation()
    .subscribe(
      formations =>{
        this.formations = formations
      }
    )
  }

  getSpeciality(){
    this.siteDePlongeeService.getSpeciality()
    .subscribe(
      specialitys =>{
        this.specialitys = specialitys
      }
    )
  }
}
