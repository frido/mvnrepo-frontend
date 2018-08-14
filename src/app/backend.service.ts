import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BackendService {

  baseUrl: String = 'https://mvnrepo-backend.herokuapp.com/api';
  // baseUrl: String = 'http://localhost:8090/api';

  constructor(private http: HttpClient) {   }

  top(schema: string, attribute: string, size: number): Observable<any> {
    // ?attribute=stargazers.totalCount&size=50
    const params = new HttpParams().set('attribute', attribute).set('size', size.toString());
    return this.http.get(this.baseUrl + '/' + schema + '/top', { params });
  }

  search(schema: string, pattern: string, size: number): Observable<any> {
    // ?pattern=test&size=50
    const params = new HttpParams().set('pattern', pattern).set('size', size.toString());
    return this.http.get(this.baseUrl + '/' + schema + '/search', { params });
  }

  id(schema: string, id: string): Observable<any> {
    // ?attribute=stargazers.totalCount&size=50
    const params = new HttpParams().set('id', id);
    return this.http.get(this.baseUrl + '/' + schema + '/id', { params });
  }
}
