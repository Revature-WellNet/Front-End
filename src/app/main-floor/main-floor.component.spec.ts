import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFloorComponent } from './main-floor.component';

describe('MainFloorComponent', () => {
  let component: MainFloorComponent;
  let fixture: ComponentFixture<MainFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFloorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
