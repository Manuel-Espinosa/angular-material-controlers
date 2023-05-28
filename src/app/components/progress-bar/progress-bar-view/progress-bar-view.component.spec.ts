import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarViewComponent } from './progress-bar-view.component';

describe('ProgressBarViewComponent', () => {
  let component: ProgressBarViewComponent;
  let fixture: ComponentFixture<ProgressBarViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressBarViewComponent]
    });
    fixture = TestBed.createComponent(ProgressBarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
