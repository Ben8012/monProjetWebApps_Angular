import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SiteDePlongeeService} from '../shared/api/site-de-plongee.service';
import {  Carnets, SiteDePlongee } from '../shared/api/class.service';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-form-update-carnet',
  templateUrl: './form-update-carnet.component.html',
  
})
export class FormUpdateCarnetComponent implements OnInit {

  formUpdateCarnet : any
  sites: SiteDePlongee[]=[]
  deco: boolean=false
  OneCarnet!:Carnets
  id : any

  constructor(private apiService : SiteDePlongeeService, private formBuilder : FormBuilder, private route:ActivatedRoute,private siteDePlongeeService:SiteDePlongeeService, private router : Router) 
  {
    this.OneCarnet = this.route.snapshot.data['datas']
    //console.log(this.OneCarnet)
   }

  ngOnInit(): void {

    let longDate = new Date(this.OneCarnet.date)
    let y = longDate.getFullYear
    console.log(y)
    this.formUpdateCarnet = this.formBuilder.group({
    
      nom : [this.OneCarnet.nom, [Validators.required]], 
      lieux : ["", [Validators.required]], 
      duree : [this.OneCarnet.duree, [Validators.required]],  
      profondeur : [this.OneCarnet.profondeur, [Validators.required]], 
      temperature_air : [this.OneCarnet.temperature_air, [Validators.required]],  
      temperature_eau : [this.OneCarnet.temperature_eau, [Validators.required]], 
      deco : [this.OneCarnet.deco,], 
      type_plongee : [this.OneCarnet.type_plongee, [Validators.required]], 
      palier : [this.OneCarnet.palier, ],
      info : [this.OneCarnet.info, [Validators.required]], 
      date : ["", [Validators.required]],  
    })

    this.getSiteDePlongee()
    
  }

  onSubmit()
  {
    if(this.formUpdateCarnet.valid)
    {
      this.formUpdateCarnet.value.id = this.OneCarnet.carnetID
      this.apiService.postUpdateCarnet(this.formUpdateCarnet.value) 
      //this.router.navigate(['/app-carnet'])
    }
  }

  getSiteDePlongee(){
    this.siteDePlongeeService.getSite()
    .subscribe(
      sites =>{
        this.sites = sites
      }
    )
  }

}
