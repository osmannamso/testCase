import {Component, Input, OnInit} from '@angular/core';
import {CommentItem} from '../../interfaces/comment-item';
import {DEFAULT_AVATAR} from '../../values/values';

@Component({
  selector: 'app-user-comment-item',
  templateUrl: './user-comment-item.component.html',
  styleUrls: ['./user-comment-item.component.scss']
})
export class UserCommentComponent implements OnInit {
  @Input() comment: CommentItem;

  defaultAvatar: string = DEFAULT_AVATAR;

  constructor() { }

  ngOnInit() {
  }

}
