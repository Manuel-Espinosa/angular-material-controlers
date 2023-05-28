import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionViewComponent } from './expansion-view.component';

describe('ExpansionViewComponent', () => {
  let component: ExpansionViewComponent;
  let fixture: ComponentFixture<ExpansionViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpansionViewComponent]
    });
    fixture = TestBed.createComponent(ExpansionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
