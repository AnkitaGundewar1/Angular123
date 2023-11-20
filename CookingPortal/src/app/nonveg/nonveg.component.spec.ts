import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonvegComponent } from './nonveg.component';

describe('NonvegComponent', () => {
  let component: NonvegComponent;
  let fixture: ComponentFixture<NonvegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonvegComponent]
    });
    fixture = TestBed.createComponent(NonvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
