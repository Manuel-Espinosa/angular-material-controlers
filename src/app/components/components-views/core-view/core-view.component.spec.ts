import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreViewComponent } from './core-view.component';

describe('CoreViewComponent', () => {
  let component: CoreViewComponent;
  let fixture: ComponentFixture<CoreViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoreViewComponent]
    });
    fixture = TestBed.createComponent(CoreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
