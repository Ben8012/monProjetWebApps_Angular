import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/shared/class/class.service';
import { UserSessionService } from 'src/app/shared/user_session/user-session.service';
import { SiteDePlongeeService } from '../../shared/api/api.service';
//import { checkIfLoginExistValidator } from './checkIfLoginExist.validator';

@Component({
  selector: 'app-login',
  styleUrls: ['login.component.scss'],
  templateUrl: './login.component.html',
  
  
})
export class LoginComponent implements OnInit {

  myForm3 : any
 
  constructor(private apiService : SiteDePlongeeService, private formBuilder : FormBuilder, private router:Router, private userSessionService :UserSessionService, private http_client : HttpClient) {

  }

  user: any
  allUsers:UserInfo[]=[]
  loginValid:any
  

  ngOnInit(): void {
    localStorage.clear()
    this.user = this.userSessionService.user
    this.getUsers()
    this.myForm3 = this.formBuilder.group({
      login : ["@", [Validators.required,Validators.email, Validators.minLength(8)],/*checkIfLoginExistValidator.check(this.http_client)*/],   
      password : ["", [Validators.required,Validators.minLength(4)]] 
    })

    
  }
  
  onSubmit()
  {
    if(this.myForm3.valid)
    {
     
      for (let index = 0; index < this.allUsers.length; index++) {
        if(this.allUsers[index].email == this.myForm3.value.login){
          this.loginValid=true
         
        }
      }
      if(this.loginValid){
        this.apiService.postLogin(this.myForm3.value)
        this.router.navigate(['/app-formation'])
        this.loginValid=undefined

      }else{
        alert("ce compte n'existe pas")
      }
    }
  }

  getUsers(){
    this.apiService.getUsers()
    .subscribe(
      allUsers =>{
        this.allUsers = allUsers;
      }
    )
  }

}
