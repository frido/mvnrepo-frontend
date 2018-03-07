import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { ProjectComponent } from './project.component';
import { MetadataComponent } from './metadata.component';
import { RouterModule } from '@angular/router';
import { FakeBackendService } from './fake-backend.service';


@NgModule({
  declarations: [
    AppComponent, MainComponent, ProjectComponent, MetadataComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [FakeBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
