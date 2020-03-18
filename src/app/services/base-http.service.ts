import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {
  constructor(protected http: HttpClient) {
  }

  public get(url: string): Observable<any> {
    return this.http.get(url).pipe(map((response: Response) => response));
  }
}
