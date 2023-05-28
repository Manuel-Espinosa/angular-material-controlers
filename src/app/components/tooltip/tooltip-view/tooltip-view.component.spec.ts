import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipViewComponent } from './tooltip-view.component';

describe('TooltipViewComponent', () => {
  let component: TooltipViewComponent;
  let fixture: ComponentFixture<TooltipViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipViewComponent]
    });
    fixture = TestBed.createComponent(TooltipViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
