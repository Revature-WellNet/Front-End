import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraumaFloorComponent } from './trauma-floor.component';

describe('TraumaFloorComponent', () => {
  let component: TraumaFloorComponent;
  let fixture: ComponentFixture<TraumaFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraumaFloorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraumaFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
