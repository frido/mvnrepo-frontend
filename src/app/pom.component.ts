import { Component, OnInit } from '@angular/core';
// import {FakeBackendService} from './fake-backend.service';
import {BackendService} from './backend.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './pom.component.html'
})
export class PomComponent implements OnInit {
  title = 'app';
  poms: any;
  searchResult: Array<any>;
  searchText$ = new Subject<string>();

  constructor(private backend: BackendService, private route: ActivatedRoute) {

  }

  search(pattern: string) {
    console.log(pattern);
    if (pattern) {
      this.searchText$.next(pattern);
    }
  }

  ngOnInit() {
    this.searchText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(pattern =>
        this.backend.search('pom', pattern, 10)
      )
    ).subscribe(
      res => {
        console.log(res);
        this.poms = res.data;
        console.log(this.searchResult);
      }
    );
    this.backend.top('pom', 'stargazers.totalCount', 10).subscribe(
      res => {
        console.log(res);
        this.poms = res.data;
        console.log(this.poms);
      }
    );
  }
}
