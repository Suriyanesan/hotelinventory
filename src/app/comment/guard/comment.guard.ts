import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CommentService } from '../comment.service';
import { comments } from '../comment';


@Injectable({
  providedIn: 'root'
})
export class CommentGuard implements Resolve<comments[]> {

  constructor(private commentService: CommentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<comments[]> | Promise<comments[]> | comments[] {
    return this.commentService.getComments();
  }
}