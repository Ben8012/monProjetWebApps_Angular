import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SiteDePlongeeService} from '../shared/api/site-de-plongee.service';
import {  SiteDePlongee } from '../shared/api/class.service';


@Component({
  selector: 'app-form-carnet',
  templateUrl: './form-carnet.component.html'
  
})
export class FormCarnetComponent implements OnInit {

  formCarnet : any
  sites: SiteDePlongee[]=[]
  deco: boolean=false
  formation: boolean=false

  constructor(private apiService : SiteDePlongeeService, private formBuilder : FormBuilder, private router:Router,private siteDePlongeeService:SiteDePlongeeService,) { }

 

  ngOnInit(): void {
    this.formCarnet = this.formBuilder.group({
      
      nom : ["", [Validators.required]], 
      lieux : ["", [Validators.required]], 
      duree : ["", [Validators.required]],  
      profondeur : ["", [Validators.required]], 
      temperature_air : ["",],  
      temperature_eau : ["",], 
      deco : ["",], 
      type_plongee : ["", [Validators.required]], 
      palier : ["",],
      info : ["",], 
      date : ["", [Validators.required]],  
    })
    this.getSiteDePlongee()
    
  }

  onSubmit()
  {
    if(this.formCarnet.valid)
    {
      this.apiService.postFormCarnet(this.formCarnet.value) 
      this.router.navigate(['/app-carnet'])
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
