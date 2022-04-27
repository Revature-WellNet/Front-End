import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtFloorComponent } from './pt-floor.component';

describe('PtFloorComponent', () => {
  let component: PtFloorComponent;
  let fixture: ComponentFixture<PtFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtFloorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
