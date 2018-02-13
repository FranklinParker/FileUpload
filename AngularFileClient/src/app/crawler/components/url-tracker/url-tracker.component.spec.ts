import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlTrackerComponent } from './url-tracker.component';

describe('UrlTrackerComponent', () => {
  let component: UrlTrackerComponent;
  let fixture: ComponentFixture<UrlTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
