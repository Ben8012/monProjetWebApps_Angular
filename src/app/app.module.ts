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
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SiteDePlongeeService } from './shared/api/site-de-plongee.service';
import { FormModificationComponent } from './form-modification/form-modification.component';
import { InfosCarrieresComponent } from './infos-carrieres/infos-carrieres.component';



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
    InfosCarrieresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    SiteDePlongeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
