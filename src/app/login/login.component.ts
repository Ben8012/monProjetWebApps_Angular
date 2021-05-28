import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  myForm3 : any
  constructor(private apiService : SiteDePlongeeService, private formBuilder : FormBuilder, private router:Router) {

  }

  ngOnInit(): void {
    this.myForm3 = this.formBuilder.group({
      
      login : ["benjaminstercks@gmail.com", [Validators.required]],   
      password : ["0000", [Validators.required]] 
    })
  }

  onSubmit()
  {
    if(this.myForm3.valid)
    {
      this.apiService.postLogin(this.myForm3.value)
    }
    this.router.navigate(['/app-formation'])
  }
}
