import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {User} from '../interfaces/user';
import {HttpClient} from '@angular/common/http';
import {BaseHttpService} from './base-http.service';
import {CommentItem} from '../interfaces/comment-item';
import {Apartment} from '../interfaces/apartment';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseHttpService {
  constructor(protected http: HttpClient) {
    super(http);
  }

  getProfile(): Observable<User> {
    return this.get('/assets/api/profile.json');
  }

  getComments(): Observable<Array<CommentItem>> { // Через id user
    return this.get('/assets/api/comments.json');
  }

  getApartments(): Observable<Array<Apartment>> {
    return this.get('/assets/api/apartments.json');
  }
}
