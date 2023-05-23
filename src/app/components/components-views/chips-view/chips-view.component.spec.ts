import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsViewComponent } from './chips-view.component';

describe('ChipsViewComponent', () => {
  let component: ChipsViewComponent;
  let fixture: ComponentFixture<ChipsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipsViewComponent]
    });
    fixture = TestBed.createComponent(ChipsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
