import { Component, OnInit } from '@angular/core';
// import {FakeBackendService} from './fake-backend.service';
import {BackendService} from './backend.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  // selector: 'app-root',
  templateUrl: './project.component.html'// ,
  // styleUrls: ['./app.component.css']
})
export class ProjectComponent implements OnInit {
  title = 'app';
  project: any;

  constructor(private backend: BackendService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
      switchMap(id => this.backend.id(id))
    ).subscribe(
      res => {
        console.log(res);
        this.project = res.data;
        console.log(this.project);
      }
    );
  }
}
