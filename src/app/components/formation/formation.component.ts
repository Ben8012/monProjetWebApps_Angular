import { Component, OnInit } from '@angular/core';
import {  SiteDePlongeeService } from '../../shared/api/api.service';
import { Formations, Speciality } from '../../shared/class/class.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls : ['./formation.component.scss']
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
