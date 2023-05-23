import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleViewComponent } from './slide-toggle-view.component';

describe('SlideToggleViewComponent', () => {
  let component: SlideToggleViewComponent;
  let fixture: ComponentFixture<SlideToggleViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideToggleViewComponent]
    });
    fixture = TestBed.createComponent(SlideToggleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
