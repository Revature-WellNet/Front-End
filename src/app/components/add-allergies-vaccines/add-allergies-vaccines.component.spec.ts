import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAllergiesVaccinesComponent } from './add-allergies-vaccines.component';

describe('AddAllergiesVaccinesComponent', () => {
  let component: AddAllergiesVaccinesComponent;
  let fixture: ComponentFixture<AddAllergiesVaccinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAllergiesVaccinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAllergiesVaccinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
