import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatenonvegComponent } from './updatenonveg.component';

describe('UpdatenonvegComponent', () => {
  let component: UpdatenonvegComponent;
  let fixture: ComponentFixture<UpdatenonvegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatenonvegComponent]
    });
    fixture = TestBed.createComponent(UpdatenonvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
