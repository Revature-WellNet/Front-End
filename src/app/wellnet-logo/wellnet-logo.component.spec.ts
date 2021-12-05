import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellnetLogoComponent } from './wellnet-logo.component';

describe('WellnetLogoComponent', () => {
  let component: WellnetLogoComponent;
  let fixture: ComponentFixture<WellnetLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellnetLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellnetLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
