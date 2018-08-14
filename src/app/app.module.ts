import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { ProjectComponent } from './project.component';
import { ProjectDetailComponent } from './project-detail.component';
import { PomComponent } from './pom.component';
import { PomDetailComponent } from './pom-detail.component';
import { MetadataComponent } from './metadata.component';
import { RouterModule } from '@angular/router';
import { FakeBackendService } from './fake-backend.service';
import { BackendService } from './backend.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, MainComponent, ProjectComponent, MetadataComponent,
    ProjectDetailComponent, PomComponent, PomDetailComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES), HttpClientModule
  ],
  providers: [FakeBackendService, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
