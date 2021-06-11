import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SiteDePlongeeService } from '../../shared/api/api.service';

@Component({
  selector: 'app-form-inscription',
  styleUrls: ['form-inscription.component.scss'],
  templateUrl: './form-inscription.component.html'
})
export class FormInscriptionComponent implements OnInit {

  myForm : any
  constructor(private apiService : SiteDePlongeeService, private formBuilder : FormBuilder, private router:Router) {

  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      
        createNomUtilsateur : [, [Validators.required]],   
        createPrenomUtilsateur : [, [Validators.required]], 
        createEmailUtilsateur : [, [Validators.required, Validators.email, Validators.minLength(8)]], 
        createPasswordlUtilsateur : [, [Validators.required, Validators.minLength(4)]], 
        createRuelUtilsateur : [, [Validators.required]], 
        createNumerolUtilsateur : [, [Validators.required]],
        createVillelUtilsateur : [, [Validators.required]], 
        createPayslUtilsateur : [, [Validators.required]],  
        createCodePostalUtilsateur : [, [Validators.required]], 
        createDateDeNaissanceUtilsateur : [, [Validators.required]], 
        createLieuDeNaissanceUtilsateur : [, [Validators.required]],
        createNumeroPadiUtilsateur : [, ],
        createNiveauActuelUtilsateur : [, [Validators.required]], 
        createNomAssurancelUtilsateur : [, ],   
        createNumeroAssurancelUtilsateur : [,]   
              
    },
    {
      //validators : customValidatorsPourMotDePasseParExemple
    })

    //console.log(this.myForm)
  }

  onSubmit()
  {
    if(this.myForm.valid)
    {
      this.apiService.postCreateUtilisateur(this.myForm.value)
      this.router.navigate(['/app-login'])
    }
  }



}
