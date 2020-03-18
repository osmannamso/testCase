import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../interfaces/user';
import {CommentItem} from '../../interfaces/comment-item';
import {Apartment} from '../../interfaces/apartment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  comments: Array<CommentItem> = [];
  apartments: Array<Apartment> = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getProfile().subscribe((user: User) => {
      this.user = user;
    });
    this.userService.getComments().subscribe((comments: Array<CommentItem>) => {
      this.comments = comments;
    });
    this.userService.getApartments().subscribe((apartments: Array<Apartment>) => {
      this.apartments = apartments;
    });
  }

}
