import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Covid19VerificationService } from '../services/covid19-verification.service';
import { FirebaseService } from '../user-auth/services/firebase.service';

import { LockoutComponent } from './lockout.component';

import { Observable, of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { DebugElement } from '@angular/core';

describe('LockoutComponent', () => {
  let component: LockoutComponent;
  let fixture: ComponentFixture<LockoutComponent>;
  let de: DebugElement;
  let service: Covid19VerificationService;
  let serviceStub: any;

  beforeEach(async () => {
    serviceStub = {
      getFormServByString(id:string):Observable<Object>{
        return of()
      }
    }
  
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        HttpClientTestingModule,
      ],
      declarations: [ LockoutComponent ], 
      providers:[{provide: FirebaseService, useValue: serviceStub}, {provide: Covid19VerificationService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockoutComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    service = TestBed.inject(Covid19VerificationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

it('should call ')