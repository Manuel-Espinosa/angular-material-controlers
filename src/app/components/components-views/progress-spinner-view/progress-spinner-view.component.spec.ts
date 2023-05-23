import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressSpinnerViewComponent } from './progress-spinner-view.component';

describe('ProgressSpinnerViewComponent', () => {
  let component: ProgressSpinnerViewComponent;
  let fixture: ComponentFixture<ProgressSpinnerViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressSpinnerViewComponent]
    });
    fixture = TestBed.createComponent(ProgressSpinnerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
