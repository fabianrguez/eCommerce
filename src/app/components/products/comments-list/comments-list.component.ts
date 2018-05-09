import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Comment} from '../../../models/comment';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit, OnChanges {

  @Input() comments: Comment[] = [];

  constructor() { }

  ngOnInit() {
  }

  areCommentsEmpty(): boolean {
    if (this.areCommentsLoaded()) {
      return this.comments.length === 0;
    }
    return true;
  }

  areCommentsLoaded(): boolean {
    return this.comments != null;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
