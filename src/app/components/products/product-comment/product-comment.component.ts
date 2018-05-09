import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../models/comment';

@Component({
  selector: 'app-product-comment',
  templateUrl: './product-comment.component.html',
  styleUrls: ['./product-comment.component.css']
})
export class ProductCommentComponent implements OnInit {

  @Input() comment: Comment;

  constructor() {
  }

  ngOnInit() {
    this.timeElapsedFromComment();
  }

  timeElapsedFromComment() {
    const dateNow = new Date();
    const timeElapsed = dateNow.getTime() - this.comment.date.getTime();
    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));
    if (days === 0) {
      const hours = Math.floor(timeElapsed / 3600000 );
      if (hours === 0) {
        const minutes = Math.floor(timeElapsed / 60000);
        if (minutes === 0) {
          const seconds = Math.floor((timeElapsed % 60000) / 1000).toFixed(0);
          return `hace ${seconds} segundos`;
        }
        return `hace ${minutes} minutos`;
      }
      return `hace ${hours} horas`;
    }
    return `hace ${days} días`;
  }

}
