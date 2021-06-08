import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';

@Component({
  selector: 'app-form-update-inscription',
  templateUrl: './form-update-inscription.component.html',
  
})
export class FormUpdateInscriptionComponent implements OnInit {

  formUpdateInscription : any
  constructor(private apiService : SiteDePlongeeService, private formBuilder : FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.formUpdateInscription = this.formBuilder.group({
      
      createNomUtilsateur : ["", [Validators.required]],   
      createPrenomUtilsateur : ["", [Validators.required]], 
      createEmailUtilsateur : ["", [Validators.required,Validators.email, Validators.minLength(8)]], 
      createPasswordlUtilsateur : ["", [Validators.required]], 
      createRuelUtilsateur : ["", [Validators.required]], 
      createNumerolUtilsateur : ["", [Validators.required]],
      createVillelUtilsateur : ["", [Validators.required]], 
      createPayslUtilsateur : ["", [Validators.required]],  
      createCodePostalUtilsateur : ["", [Validators.required]], 
      createDateDeNaissanceUtilsateur : ["1980-12-10", [Validators.required]], 
      createLieuDeNaissanceUtilsateur : ["", [Validators.required]],
      createNumeroPadiUtilsateur : ["", [Validators.required]],
      createNiveauActuelUtilsateur : ["", [Validators.required]], 
      createNomAssurancelUtilsateur : ["", [Validators.required]],   
      createNumeroAssurancelUtilsateur : ["", [Validators.required]]   
            
  })
  }


  onSubmit()
  {
    if(this.formUpdateInscription.valid)
    {
      this.apiService.postUpdateUtilisateur(this.formUpdateInscription.value)
      this.router.navigate(['/app-formation'])
    }
  }

}
