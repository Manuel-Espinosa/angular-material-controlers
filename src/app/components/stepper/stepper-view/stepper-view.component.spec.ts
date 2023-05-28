import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperViewComponent } from './stepper-view.component';

describe('StepperViewComponent', () => {
  let component: StepperViewComponent;
  let fixture: ComponentFixture<StepperViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepperViewComponent]
    });
    fixture = TestBed.createComponent(StepperViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
