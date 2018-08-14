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
export class MetadataComponent {

}
