import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html'
})
export class FormInscriptionComponent implements OnInit {

  myForm : any
  constructor(private apiService : SiteDePlongeeService, private formBuilder : FormBuilder, private router:Router) {

  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      
        createNomUtilsateur : ["", [Validators.required]],   
        createPrenomUtilsateur : ["", [Validators.required]], 
        createEmailUtilsateur : ["", [Validators.required]], 
        createPasswordlUtilsateur : ["", [Validators.required]], 
        createRuelUtilsateur : ["", [Validators.required]], 
        createNumerolUtilsateur : ["", [Validators.required]],
        createVillelUtilsateur : ["", [Validators.required]], 
        createPayslUtilsateur : ["", [Validators.required]],  
        createCodePostalUtilsateur : ["", [Validators.required]], 
        createDateDeNaissanceUtilsateur : ["", [Validators.required]], 
        createLieuDeNaissanceUtilsateur : ["", [Validators.required]],
        createNumeroPadiUtilsateur : ["", [Validators.required]],
        createNiveauActuelUtilsateur : ["", [Validators.required]], 
        createNomAssurancelUtilsateur : ["", [Validators.required]],   
        createNumeroAssurancelUtilsateur : ["", [Validators.required]]   
              
    })
  }

  onSubmit()
  {
    if(this.myForm.valid)
    {
      this.apiService.postCreateUtilisateur(this.myForm.value)
      this.router.navigate(['/'])
    }
  }



}
