import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeViewComponent } from './badge-view.component';

describe('BadgeViewComponent', () => {
  let component: BadgeViewComponent;
  let fixture: ComponentFixture<BadgeViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeViewComponent]
    });
    fixture = TestBed.createComponent(BadgeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
