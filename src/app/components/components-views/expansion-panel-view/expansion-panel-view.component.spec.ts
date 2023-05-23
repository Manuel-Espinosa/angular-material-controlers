import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelViewComponent } from './expansion-panel-view.component';

describe('ExpansionPanelViewComponent', () => {
  let component: ExpansionPanelViewComponent;
  let fixture: ComponentFixture<ExpansionPanelViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpansionPanelViewComponent]
    });
    fixture = TestBed.createComponent(ExpansionPanelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
