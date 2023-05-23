import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonViewComponent } from './radio-button-view.component';

describe('RadioButtonViewComponent', () => {
  let component: RadioButtonViewComponent;
  let fixture: ComponentFixture<RadioButtonViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioButtonViewComponent]
    });
    fixture = TestBed.createComponent(RadioButtonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
