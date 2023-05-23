import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RipplesViewComponent } from './ripples-view.component';

describe('RipplesViewComponent', () => {
  let component: RipplesViewComponent;
  let fixture: ComponentFixture<RipplesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RipplesViewComponent]
    });
    fixture = TestBed.createComponent(RipplesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
