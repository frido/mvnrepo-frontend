import { Component, OnInit } from '@angular/core';
import {FakeBackendService} from './fake-backend.service';

@Component({
  // selector: 'app-root',
  templateUrl: './metadata.component.html'// ,
  // styleUrls: ['./app.component.css']
})
export class MetadataComponent implements OnInit {
  title = 'app';
  searchResult: Array<any>;

  constructor(private backend: FakeBackendService) {

  }

  ngOnInit() {
    this.backend.search('pattern').subscribe(
      projs => this.searchResult = projs
    );
  }
}
