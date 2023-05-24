import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetViewComponent } from './bottom-sheet-view.component';

describe('BottomSheetViewComponent', () => {
  let component: BottomSheetViewComponent;
  let fixture: ComponentFixture<BottomSheetViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BottomSheetViewComponent]
    });
    fixture = TestBed.createComponent(BottomSheetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
