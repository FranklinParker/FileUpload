import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FileModule} from "./file/file.module";
import {routingPaths} from './app.routing.module';
import { UrlTrackerComponent } from './crawler/components/url-tracker/url-tracker.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {FormsModule} from "@angular/forms";
import {UrlFinderService} from "./crawler/url-finder.service";
import {WatsonModule} from "./watson/watson.module";



@NgModule({
  declarations: [
    AppComponent,
    UrlTrackerComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FileModule,
    FormsModule,
    routingPaths,
    WatsonModule

  ],
  providers: [
    UrlFinderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
