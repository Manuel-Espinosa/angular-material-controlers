import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarViewComponent } from './snack-bar-view.component';

describe('SnackBarViewComponent', () => {
  let component: SnackBarViewComponent;
  let fixture: ComponentFixture<SnackBarViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnackBarViewComponent]
    });
    fixture = TestBed.createComponent(SnackBarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
