import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SiteDePlongeeService} from '../../shared/api/api.service';
import {  SiteDePlongee } from '../../shared/class/class.service';
import { ActivatedRoute} from '@angular/router';
import { UserSessionService } from '../../shared/user_session/user-session.service';


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
      
      nom : [, [Validators.required]], 
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
