import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../interfaces/user';

@Component({
  selector: 'app-user-profile-item',
  templateUrl: './user-profile-item.component.html',
  styleUrls: ['./user-profile-item.component.scss']
})
export class UserProfileItemComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
