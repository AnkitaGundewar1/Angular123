import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevegComponent } from './updateveg.component';

describe('UpdatevegComponent', () => {
  let component: UpdatevegComponent;
  let fixture: ComponentFixture<UpdatevegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatevegComponent]
    });
    fixture = TestBed.createComponent(UpdatevegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
