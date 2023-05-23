import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerViewComponent } from './divider-view.component';

describe('DividerViewComponent', () => {
  let component: DividerViewComponent;
  let fixture: ComponentFixture<DividerViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DividerViewComponent]
    });
    fixture = TestBed.createComponent(DividerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
