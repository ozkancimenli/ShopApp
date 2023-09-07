import { Injectable } from "@angular/core";
import { AuthService } from "../model/auth.service";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard {

    constructor(private router: Router, private authService: AuthService) { }

    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.authService.authenticated) {
            this.router.navigateByUrl('/admin/auth');
            return false;
        }
        return true;
    }

}