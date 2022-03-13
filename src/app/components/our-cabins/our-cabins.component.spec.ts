import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCabinsComponent } from './our-cabins.component';

describe('OurCabinsComponent', () => {
  let component: OurCabinsComponent;
  let fixture: ComponentFixture<OurCabinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurCabinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCabinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
