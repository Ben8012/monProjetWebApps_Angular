import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root' })
export class SuperAdminGuard implements CanActivate{
    constructor(public auth: AuthService, public router: Router) {}
    canActivate(): boolean {
      if (!this.auth.isSuperAdmin()) {
        this.router.navigateByUrl('/app-login');
        alert('Vous devez etre connecté pour accéder a cet URL')
        return false;
      }
      return true;
    }
}