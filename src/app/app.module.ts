import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { SitePlongeeComponent } from './site-plongee/site-plongee.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiteDePlongeeService } from './shared/api/site-de-plongee.service';
import { FormModificationComponent } from './form-modification/form-modification.component';
import { InfosCarrieresComponent } from './infos-carrieres/infos-carrieres.component';
import { ResolverInfosCarrieresService } from './shared/api/resolver-infos-carrieres.service';
import { AgendaComponent } from './agenda/agenda.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CommonModule } from '@angular/common';
import { FormationComponent } from './formation/formation.component';
import { InfosFormationComponent } from './infos-formation/infos-formation.component';
import { InfosSpecialiteComponent } from './infos-specialite/infos-specialite.component';
import { VgBufferingModule, VgControlsModule, VgCoreModule, VgOverlayPlayModule } from 'ngx-videogular';
import { CarnetComponent } from './carnet/carnet.component';
import { FormCarnetComponent } from './form-carnet/form-carnet.component';
import { FormUpdateCarnetComponent } from './form-update-carnet/form-update-carnet.component';
import { FormUpdateInscriptionComponent } from './form-update-inscription/form-update-inscription.component';
import { HttpInterceptorService } from './shared/api/http-interceptor.service';
import { ChoixFormationComponent } from './choix-formation/choix-formation.component';
import { ChoixSpecialiteeComponent } from './choix-specialitee/choix-specialitee.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FormInscriptionComponent,
    SitePlongeeComponent,
    LoginComponent,
    FormModificationComponent,
    InfosCarrieresComponent,
    AgendaComponent,
    FormationComponent,
    InfosFormationComponent,
    InfosSpecialiteComponent,
    CarnetComponent,
    FormCarnetComponent,
    FormUpdateCarnetComponent,
    FormUpdateInscriptionComponent,
    ChoixFormationComponent,
    ChoixSpecialiteeComponent,
    
    
    
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
    })
  ],
  
  providers: [
    SiteDePlongeeService,
    ResolverInfosCarrieresService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : HttpInterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
