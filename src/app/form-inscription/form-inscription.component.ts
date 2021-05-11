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
      
        createNomUtilsateur : ["Sterckx", [Validators.required]],   
        createPrenomUtilsateur : ["Benjamin", [Validators.required]], 
        createEmailUtilsateur : ["benjaminstercks@gmail.com", [Validators.required]], 
        createPasswordlUtilsateur : ["", [Validators.required]], 
        createRuelUtilsateur : ["de villers", [Validators.required]], 
        createNumerolUtilsateur : ["7", [Validators.required]],
        createVillelUtilsateur : ["Sart Dames Avelines", [Validators.required]], 
        createPayslUtilsateur : ["Belgique", [Validators.required]],  
        createCodePostalUtilsateur : ["1495", [Validators.required]], 
        createDateDeNaissanceUtilsateur : ["1980-12-10", [Validators.required]], 
        createLieuDeNaissanceUtilsateur : ["Nivelles", [Validators.required]],
        createNumeroPadiUtilsateur : ["454519", [Validators.required]],
        createNiveauActuelUtilsateur : ["", [Validators.required]], 
        createNomAssurancelUtilsateur : ["DAN", [Validators.required]],   
        createNumeroAssurancelUtilsateur : ["80808", [Validators.required]]   
              
    })
  }

  onSubmit()
  {
    if(this.myForm.valid)
    {
      this.apiService.postCreateUtilisateur(this.myForm.value)
      this.router.navigate(['/app-formation'])
    }
  }



}
