import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseComponent } from './nurse.component';

describe('NurseComponent', () => {
  let component: NurseComponent;
  let fixture: ComponentFixture<NurseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
