import { Component, OnInit } from '@angular/core';
// import {FakeBackendService} from './fake-backend.service';
import {BackendService} from './backend.service';

@Component({
  // selector: 'app-root',
  templateUrl: './main.component.html'// ,
  // styleUrls: ['./app.component.css']
})
export class MainComponent implements OnInit {
  title = 'app';
  projects: Array<any>;

  constructor(private backend: BackendService) {

  }

  ngOnInit() {

  }
}
