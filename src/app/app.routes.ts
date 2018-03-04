import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { ProjectComponent } from './project.component';
import { MetadataComponent } from './metadata.component';

export const ROUTES: Routes = [
  { path: '', component: MainComponent },
  { path: 'repo', component: ProjectComponent },
  { path: 'lib', component: MetadataComponent }
];
