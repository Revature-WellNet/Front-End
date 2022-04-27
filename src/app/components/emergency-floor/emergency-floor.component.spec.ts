import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyFloorComponent } from './emergency-floor.component';

describe('EmergencyFloorComponent', () => {
  let component: EmergencyFloorComponent;
  let fixture: ComponentFixture<EmergencyFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmergencyFloorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
