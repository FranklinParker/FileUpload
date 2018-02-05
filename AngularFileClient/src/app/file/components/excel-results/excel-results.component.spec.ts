import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelResultsComponent } from './excel-results.component';

describe('ExcelResultsComponent', () => {
  let component: ExcelResultsComponent;
  let fixture: ComponentFixture<ExcelResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
