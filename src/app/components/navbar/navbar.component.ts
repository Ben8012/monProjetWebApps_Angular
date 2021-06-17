import { Component, OnInit } from '@angular/core';
import { SiteDePlongeeService } from '../../shared/api/api.service';
import { UserSessionService } from '../../shared/user_session/user-session.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls:['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  
  public user: any;

  constructor(private siteDePlongeeService:SiteDePlongeeService,
    private userSessionService : UserSessionService) {}

  ngOnInit(): void {
    this.userSessionService.user$.subscribe((user : any) => {
      this.user = user;
    })
  }

  LogOut(){
    this.userSessionService.clearSession()
  }

  goFb(){
    window.open("https://www.facebook.com/groups/342660476729885");
  }

  monCv(){
    window.open('http://localhost:3000/download/CV_Benjamin.pdf')
  }

}
