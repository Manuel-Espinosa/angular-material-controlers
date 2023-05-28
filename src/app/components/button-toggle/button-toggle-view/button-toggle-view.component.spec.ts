import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleViewComponent } from './button-toggle-view.component';

describe('ButtonToggleViewComponent', () => {
  let component: ButtonToggleViewComponent;
  let fixture: ComponentFixture<ButtonToggleViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonToggleViewComponent]
    });
    fixture = TestBed.createComponent(ButtonToggleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
