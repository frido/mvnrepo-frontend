import { Component, OnInit } from '@angular/core';
// import {FakeBackendService} from './fake-backend.service';
import {BackendService} from './backend.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './pom-detail.component.html'
})
export class PomDetailComponent implements OnInit {
  title = 'app';
  pom: any;

  constructor(private backend: BackendService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
      switchMap(id => this.backend.id('pom', id))
    ).subscribe(
      res => {
        console.log(res);
        this.pom = res.data.pom;
        console.log(this.pom);
      }
    );
  }
}
