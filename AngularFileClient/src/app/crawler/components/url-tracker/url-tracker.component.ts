import { Component, OnInit } from '@angular/core';
import {UrlFinderService} from "../../url-finder.service";

@Component({
  selector: 'app-url-tracker',
  templateUrl: './url-tracker.component.html',
  styleUrls: ['./url-tracker.component.css']
})
export class UrlTrackerComponent implements OnInit {
  url = '';
  html='';

  constructor(private urlFinder: UrlFinderService) { }

  ngOnInit() {
  }

  navigateUrl(){
    if(this.url && this.url.length>0){
      this.urlFinder.navigateUrl(this.url)
        .subscribe((data)=>{
          alert('got url:'+ JSON.stringify( data,null,2));
          this.html= data.data;
        });
    }

  }

}
