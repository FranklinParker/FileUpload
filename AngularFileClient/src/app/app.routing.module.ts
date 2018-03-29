import {ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FileUploadComponent} from "./file/components/file-upload/file-upload.component";
import {UrlTrackerComponent} from "./crawler/components/url-tracker/url-tracker.component";
import {WatsonSpeechToTextComponent} from "./watson/components/watson-speech-to-text/watson-speech-to-text.component";


const appRoutes = [
  {
    path: '',
    component: FileUploadComponent
  },
  {
    path: 'speechToText',
    component: WatsonSpeechToTextComponent
  }, {
    path: 'urlTracker',
    component: UrlTrackerComponent
  }];

export const routingPaths: ModuleWithProviders = RouterModule.forRoot(appRoutes);
