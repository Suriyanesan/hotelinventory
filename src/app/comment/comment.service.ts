import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { comments } from './comment';  // Assuming you have a 'comment' file with the 'comments' type

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(): Observable<comments[]> {
    return this.http.get<comments[]>('https://jsonplaceholder.typicode.com/comments');
  }

}