import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Comment} from '../../../models/comment';
import * as firebase from 'firebase';

@Component({
  selector: 'app-comment-add',
  templateUrl: './comment-add.component.html',
  styleUrls: ['./comment-add.component.css']
})
export class CommentAddComponent implements OnInit {

  @Output() commentAdded: EventEmitter<Comment> = new EventEmitter<Comment>();

  message: string;
  comment: Comment;
  users = ['Paco', 'Jacinto', 'Eustaquio', 'Martín', 'Francisco', 'Cotufa'];


  constructor() {
  }

  ngOnInit() {
  }

  isCommentEmpty(): boolean {
    return (!this.message || /^\s*$/.test(this.message));
  }

  _addComment() {
    const randomIndex = (Math.floor(Math.random() * this.users.length));
    console.log(randomIndex);
    const dateNow = firebase.firestore.Timestamp.now();
    this.comment = {
      username: this.users[randomIndex],
      date: dateNow,
      message: this.message,
      userPhoto: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Antu_im-invisible-user.svg/2000px-Antu_im-invisible-user.svg.png`

    };
    this.commentAdded.emit(this.comment);
    this.message = '';
  }
}
