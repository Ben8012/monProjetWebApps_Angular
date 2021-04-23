import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import { HomeComponent } from './home/home.component';
import { SitePlongeeComponent } from './site-plongee/site-plongee.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'app-form-inscription', component: FormInscriptionComponent},
  { path:'app-site-plongee', component: SitePlongeeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
