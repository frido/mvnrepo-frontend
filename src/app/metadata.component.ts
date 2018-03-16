import { Component, OnInit } from '@angular/core';
// import {FakeBackendService} from './fake-backend.service';
import {BackendService} from './backend.service';

@Component({
  // selector: 'app-root',
  templateUrl: './metadata.component.html'// ,
  // styleUrls: ['./app.component.css']
})
export class MetadataComponent implements OnInit {
  title = 'app';
  searchResult: Array<any>;

  constructor(private backend: BackendService) {

  }

  ngOnInit() {
    this.backend.search('pattern', 50).subscribe(
      res => {
        console.log(res);
        this.searchResult = res.data;
        console.log(this.searchResult);
      }
    );
  }
}
