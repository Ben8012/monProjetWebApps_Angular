import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SiteDePlongeeService} from '../shared/api/site-de-plongee.service';
import {  SiteDePlongee } from '../shared/api/class.service';
import { ActivatedRoute} from '@angular/router';
import { UserSessionService } from '../shared/api/user-session.service';


@Component({
  selector: 'app-form-carnet',
  styleUrls: ['form-carnet.component.scss'],
  templateUrl: './form-carnet.component.html'
  
})
export class FormCarnetComponent implements OnInit {

  formCarnet : any
  sites: SiteDePlongee[]=[]
  deco: boolean=false
  formation: boolean=false
  user : any

  constructor(private apiService : SiteDePlongeeService, private formBuilder : FormBuilder, private router:Router,private siteDePlongeeService:SiteDePlongeeService,private route: ActivatedRoute, private userSessionService : UserSessionService) { }

 

  ngOnInit(): void {
    this.user = this.userSessionService.user

    this.formCarnet = this.formBuilder.group({
      
      nom : ["Open Water Diver", [Validators.required]], 
      lieux : ["", [Validators.required]], 
      duree : ["50", [Validators.required]],  
      profondeur : ["10", [Validators.required]], 
      temperature_air : [null],  
      temperature_eau : [null], 
      deco : [null], 
      type_plongee : ["Formation", [Validators.required]], 
      palier : [null],
      info : ["chouette",], 
      date : ["", [Validators.required]], 
      userId : [this.user.userId],
    })
    this.getSiteDePlongee()
    
  }

  onSubmit()
  {
    if(this.formCarnet.valid)
    {
      this.apiService.postFormCarnet(this.formCarnet.value) 
      this.router.navigate(['/app-carnet/'+this.user.userId])
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
