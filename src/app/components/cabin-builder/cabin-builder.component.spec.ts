import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinBuilderComponent } from './cabin-builder.component';

describe('CabinBuilderComponent', () => {
  let component: CabinBuilderComponent;
  let fixture: ComponentFixture<CabinBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
