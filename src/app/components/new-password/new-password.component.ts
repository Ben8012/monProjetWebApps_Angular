import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SiteDePlongeeService } from 'src/app/shared/api/api.service';
import { UserInfo } from 'src/app/shared/class/class.service';
import { UserSessionService } from 'src/app/shared/user_session/user-session.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  myFormNewPassword : any

  constructor(private apiService : SiteDePlongeeService, private formBuilder : FormBuilder, private router:Router, private userSessionService :UserSessionService, private http_client : HttpClient) { }

  user: any
  allUsers:UserInfo[]=[]
  loginValid:any

  ngOnInit(): void {

    this.user = this.userSessionService.user
    this.getUsers()
    this.myFormNewPassword = this.formBuilder.group({
      login : ["@", [Validators.required,Validators.email, Validators.minLength(8)],/*checkIfLoginExistValidator.check(this.http_client)*/],   
      password : ["", [Validators.required,Validators.minLength(4)]] 
    })

 
  }

  onSubmit()
  {
    if(this.myFormNewPassword.valid)
    {
     
      for (let index = 0; index < this.allUsers.length; index++) {
        if(this.allUsers[index].email == this.myFormNewPassword.value.login){
          this.loginValid=true
         
        }
      }
      if(this.loginValid){
        this.apiService.postNewPassword(this.myFormNewPassword.value)
        localStorage.setItem('formNewpassword', JSON.stringify(this.myFormNewPassword.value))
        this.router.navigate(['/app-login'])
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
