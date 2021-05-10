import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  myForm3 : any
  constructor(private apiService : SiteDePlongeeService, private formBuilder : FormBuilder) {

  }

  ngOnInit(): void {
    this.myForm3 = this.formBuilder.group({
      
      login : ["", [Validators.required]],   
      password : ["", [Validators.required]] 
    })
  }

  onSubmit()
  {
    if(this.myForm3.valid)
    {
      this.apiService.postCreateUtilisateur(this.myForm3.value)
    }
  }
}
