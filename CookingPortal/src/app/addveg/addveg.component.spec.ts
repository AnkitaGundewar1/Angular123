import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvegComponent } from './addveg.component';

describe('AddvegComponent', () => {
  let component: AddvegComponent;
  let fixture: ComponentFixture<AddvegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddvegComponent]
    });
    fixture = TestBed.createComponent(AddvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
