import { Component, OnInit } from '@angular/core';
import { SiteDePlongeeService } from '../shared/api/site-de-plongee.service';
import { UserSessionService } from '../shared/api/user-session.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  
  public user: any;

  constructor(private siteDePlongeeService:SiteDePlongeeService,
    private userSessionService : UserSessionService) {}

  ngOnInit(): void {
    this.userSessionService.user$.subscribe((user : any) => {
      this.user = user;
      //console.log(this.user)
    })
  }

  LogOut(){
    this.userSessionService.clearSession()
  }

}
