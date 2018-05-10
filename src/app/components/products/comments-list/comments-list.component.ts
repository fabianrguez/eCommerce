import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Comment} from '../../../models/comment';
import {ProductShareService} from '../../../services/product-share.service';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit, OnChanges {

  @Input() comments: Comment[] = [];

  constructor(private productShareService: ProductShareService) { }

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

  _handleCommentAdded(comment: Comment) {
    const productSelected = this.productShareService.productSelected;
    productSelected.comments.push(comment);
    this.productShareService.update(productSelected);
  }
}