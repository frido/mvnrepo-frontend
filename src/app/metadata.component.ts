import { Component, OnInit, Input } from '@angular/core';
// import {FakeBackendService} from './fake-backend.service';
import {BackendService} from './backend.service';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './metadata.component.html'// ,
  // styleUrls: ['./app.component.css']
})
export class MetadataComponent implements OnInit {
  searchResult: Array<any>;
  searchText$ = new Subject<string>();
  @Input() showSearch: boolean;

  constructor(private backend: BackendService) { }

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
        this.backend.search(pattern, 50)
      )
    ).subscribe(
      res => {
        console.log(res);
        this.searchResult = res.data;
        console.log(this.searchResult);
      }
    );
  }
}
