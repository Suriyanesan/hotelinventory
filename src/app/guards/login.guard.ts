import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../login/login.service";

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate, CanLoad {

  constructor(private loginService: LoginService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.loginService.isLoggedIn ? true : this.router.navigate(['/login']);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    return true;
  }
}
