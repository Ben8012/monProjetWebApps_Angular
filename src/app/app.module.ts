import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormInscriptionComponent } from './components/form-inscription/form-inscription.component';
import { SitePlongeeComponent } from './components/site-plongee/site-plongee.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiteDePlongeeService } from './shared/api/api.service';
import { FormUpdateInscriptionComponent } from './components/form-update-inscription/form-update-inscription.component';

import { InfosCarrieresComponent } from './components/infos-carrieres/infos-carrieres.component';
import { ResolverInfosCarrieresService } from './shared/resolvers/resolver-infos-carrieres.service';
import { AgendaComponent } from './components/agenda/agenda.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CommonModule } from '@angular/common';
import { FormationComponent } from './components/formation/formation.component';
import { InfosFormationComponent } from './components/infos-formation/infos-formation.component';
import { InfosSpecialiteComponent } from './components/infos-specialite/infos-specialite.component';
import { VgBufferingModule, VgControlsModule, VgCoreModule, VgOverlayPlayModule } from 'ngx-videogular';
import { CarnetComponent } from './components/carnet/carnet.component';
import { FormCarnetComponent } from './components/form-carnet/form-carnet.component';
import { FormUpdateCarnetComponent } from './components/form-update-carnet/form-update-carnet.component';
import { HttpInterceptorService } from './shared/interceptor/http-interceptor.service';
import { ChoixFormationComponent } from './components/choix-formation/choix-formation.component';
import { ChoixSpecialiteeComponent } from './components/choix-specialitee/choix-specialitee.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserSessionService } from './shared/user_session/user-session.service';

import {  LOCALE_ID } from '@angular/core' ;
import { registerLocaleData } from '@angular/common' ;
import localeFr from '@angular/common/locales/fr';
import { NewPasswordComponent } from './components/new-password/new-password.component';
import { ValidatePasswordComponent } from './components/validate-password/validate-password.component' ;

registerLocaleData(localeFr);;




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FormInscriptionComponent,
    SitePlongeeComponent,
    LoginComponent,
    FormUpdateInscriptionComponent,
    InfosCarrieresComponent,
    AgendaComponent,
    FormationComponent,
    InfosFormationComponent,
    InfosSpecialiteComponent,
    CarnetComponent,
    FormCarnetComponent,
    FormUpdateCarnetComponent,
    ChoixFormationComponent,
    ChoixSpecialiteeComponent,
    ProfileComponent,
    AllUsersComponent,
    NewPasswordComponent,
    ValidatePasswordComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModalModule,
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide : DateAdapter,
      useFactory : adapterFactory,
    }),
  ],
  
  providers: [
    { provide: LOCALE_ID, useValue: "fr-FR" },
    SiteDePlongeeService,
    ResolverInfosCarrieresService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HttpInterceptorService,
      multi : true
    },
    UserSessionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
