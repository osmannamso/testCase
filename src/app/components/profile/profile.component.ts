import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../interfaces/user';
import {CommentItem} from '../../interfaces/comment-item';
import {Apartment} from '../../interfaces/apartment';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: User;
  comments: Array<CommentItem> = [];
  apartments: Array<Apartment> = [];

  userSubscription: Subscription;
  commentsSubscription: Subscription;
  apartmentsSubscription: Subscription;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userSubscription = this.userService.getProfile().subscribe((user: User) => {
      this.user = user;
    });
    this.commentsSubscription = this.userService.getComments().subscribe((comments: Array<CommentItem>) => {
      this.comments = comments;
    });
    this.apartmentsSubscription = this.userService.getApartments().subscribe((apartments: Array<Apartment>) => {
      this.apartments = apartments;
    });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
    if (this.commentsSubscription) {
      this.commentsSubscription.unsubscribe();
    }
    if (this.apartmentsSubscription) {
      this.apartmentsSubscription.unsubscribe();
    }
  }

}
