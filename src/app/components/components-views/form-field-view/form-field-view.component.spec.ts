import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldViewComponent } from './form-field-view.component';

describe('FormFieldViewComponent', () => {
  let component: FormFieldViewComponent;
  let fixture: ComponentFixture<FormFieldViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFieldViewComponent]
    });
    fixture = TestBed.createComponent(FormFieldViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
