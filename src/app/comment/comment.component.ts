import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments$ = this.commentService.getComments();

  comment$ = this.activateRoute.data.pipe(pluck('comments'));

  constructor(private commentService: CommentService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.data.subscribe((data) => {
      this.comments$ = data['comments'];
    });
  }
}
