import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticStyleTesterComponent } from './static-style-tester.component';

describe('StaticStyleTesterComponent', () => {
  let component: StaticStyleTesterComponent;
  let fixture: ComponentFixture<StaticStyleTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticStyleTesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticStyleTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
