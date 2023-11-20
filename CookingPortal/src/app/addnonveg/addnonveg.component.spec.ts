import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnonvegComponent } from './addnonveg.component';

describe('AddnonvegComponent', () => {
  let component: AddnonvegComponent;
  let fixture: ComponentFixture<AddnonvegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnonvegComponent]
    });
    fixture = TestBed.createComponent(AddnonvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
