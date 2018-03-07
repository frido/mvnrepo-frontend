import { Component, OnInit } from '@angular/core';
import {FakeBackendService} from './fake-backend.service';

@Component({
  // selector: 'app-root',
  templateUrl: './project.component.html'// ,
  // styleUrls: ['./app.component.css']
})
export class ProjectComponent implements OnInit {
  title = 'app';
  project: any;

  constructor(private backend: FakeBackendService) {

  }

  ngOnInit() {
    this.backend.project('id').subscribe(
      proj => this.project = proj
    );
  }
}
