import { Component, OnInit } from '@angular/core';
// import {FakeBackendService} from './fake-backend.service';
import {BackendService} from './backend.service';

@Component({
  // selector: 'app-root',
  templateUrl: './project.component.html'// ,
  // styleUrls: ['./app.component.css']
})
export class ProjectComponent implements OnInit {
  title = 'app';
  project: any;

  constructor(private backend: BackendService) {

  }

  ngOnInit() {
    this.backend.id('https://github.com/spring-projects/spring-framework').subscribe(
      res => {
        console.log(res);
        this.project = res.data;
        console.log(this.project);
      }
    );
  }
}
