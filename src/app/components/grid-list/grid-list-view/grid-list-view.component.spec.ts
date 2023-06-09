import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListViewComponent } from './grid-list-view.component';

describe('GridListViewComponent', () => {
  let component: GridListViewComponent;
  let fixture: ComponentFixture<GridListViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridListViewComponent]
    });
    fixture = TestBed.createComponent(GridListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
