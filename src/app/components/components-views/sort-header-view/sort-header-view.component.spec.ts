import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortHeaderViewComponent } from './sort-header-view.component';

describe('SortHeaderViewComponent', () => {
  let component: SortHeaderViewComponent;
  let fixture: ComponentFixture<SortHeaderViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortHeaderViewComponent]
    });
    fixture = TestBed.createComponent(SortHeaderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
