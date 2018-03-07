import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {PROJECTS} from './projects';

@Injectable()
export class FakeBackendService {
  top(attribute: String): Observable<any> {
    return of(PROJECTS);
  }
  search(pattern: String): Observable<any> {
    return of(PROJECTS);
  }
  project(id: String): Observable<any> {
    return of(PROJECTS[0]);
  }
}
