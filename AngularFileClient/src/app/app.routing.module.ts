import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FileUploadComponent} from "./file/components/file-upload/file-upload.component";
import {UrlTrackerComponent} from "./crawler/components/url-tracker/url-tracker.component";


const appRoutes = [
  {
    path: '',
    component: FileUploadComponent
  }, {
    path: 'urlTracker',
    component: UrlTrackerComponent
  }];

export const routingPaths: ModuleWithProviders = RouterModule.forRoot(appRoutes);
