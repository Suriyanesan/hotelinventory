import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BookingComponent } from '../booking.component';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BookingGuard implements CanDeactivate<BookingComponent> {

  constructor(private _snackBar: MatSnackBar) { }

  canDeactivate(
    component: BookingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (component.bookingForm.pristine) {
      return component.bookingForm.pristine
    } else {
      this._snackBar.open('You have unsaved changed', 'DISCARD')
      return false;
    }
  }
}
