import { Component, OnInit } from '@angular/core';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';
import {  UserInfo } from '../shared/api/class.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  infoUser: UserInfo[]=[]
  constructor(private siteDePlongeeService:SiteDePlongeeService ) {}

  ngOnInit(): void {
    // this.getInfoUser()
  }

  // getInfoUser(){
  //   this.siteDePlongeeService.getInfoUser()
  //   .subscribe(
  //     infoUser =>{
  //       this.infoUser = infoUser
  //       console.log(infoUser)
  //     }
  //   )
  // }
}
