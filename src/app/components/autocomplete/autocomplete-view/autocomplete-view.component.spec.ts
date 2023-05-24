import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteViewComponent } from './autocomplete-view.component';

describe('AutocompleteViewComponent', () => {
  let component: AutocompleteViewComponent;
  let fixture: ComponentFixture<AutocompleteViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutocompleteViewComponent]
    });
    fixture = TestBed.createComponent(AutocompleteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
