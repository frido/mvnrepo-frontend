import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { ProjectComponent } from './project.component';
import { ProjectDetailComponent } from './project-detail.component';
import { PomComponent } from './pom.component';
import { PomDetailComponent } from './pom-detail.component';
import { MetadataComponent } from './metadata.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/project', pathMatch: 'full' },
  { path: 'pom', component: PomComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'pom/:id', component: PomDetailComponent },
  { path: 'project/:id', component: ProjectDetailComponent }
];
