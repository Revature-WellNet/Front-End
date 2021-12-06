import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FirebaseService } from '../../user-auth/services/firebase.service';
import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

// Mocking Firebase Service 

// class MockFireBaseService extends FirebaseService{
//  isLogin(){
//    return true;
//  }
// }


//Dependency Injections Testing.
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let service:FirebaseService;
  // let mockService: MockFireBaseService;
  

  beforeEach(async () => {
     TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        HttpClientTestingModule,
      ],
      declarations: [LoginComponent],
      providers: [FirebaseService], // if you wanna test then it has to be part of testing module. so we should add the service here
    }).compileComponents();
    // TestBed.overrideComponent(
    //   LoginComponent,
    //   {set: {providers:[{provide:FirebaseService, useClass:MockFireBaseService}]}}
    // )


  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    service = TestBed.inject(FirebaseService);
    // mockService=TestBed.inject(MockFireBaseService)
  });

  it('Test service is instance of Firebase', () => {
    expect(service instanceof FirebaseService).toBeTruthy();
  });

  it('Should inject service using inject function and check its instance', inject([FirebaseService], (injectedService: FirebaseService)=>{
    expect(injectedService).toBeTruthy();
    expect(injectedService instanceof FirebaseService).toBeTruthy()
  }));

  it('Should test injected service injected using component overiding', ()=>{
    let overRiddenService = fixture.debugElement.injector.get(FirebaseService);
    // expect(overRiddenService instanceof MockFireBaseService).toBeTruthy();
  })

  it("testing login function", ()=>{
    // spyOn(mockService,"isLogin").and.returnValue(true)
    const btn= de.query(By.css('#btnLogin'));

    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(service.login).toHaveBeenCalled();
  })

  
 
});

//create of component and verify title
describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        HttpClientTestingModule,
      ],
      declarations: [LoginComponent],
      providers: [],
    }).compileComponents();
  });

  //creating fixture app
  it('Should Create the Component', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  //testing that the variable title is equal to text Sign In
  it('Should have title Sign in', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Sign in');
  });
});

//  method calling test
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  // import the service to check the insertion
  let service: FirebaseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        HttpClientTestingModule,
      ],
      declarations: [LoginComponent],
      providers: [FirebaseService], // if you wanna test then it has to be part of testing module. so we should add the service here
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    service = TestBed.inject(FirebaseService);
    component = fixture.componentInstance;
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing the calling of "autosign in" method at On Init', () => {
    spyOn(component.firebaseService,"autoSignIn").and.returnValue(true);
    let login = component.ngOnInit();
    fixture.detectChanges();
    expect(service.autoSignIn()).toBeTrue();
  });
});

//interpolation test
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        HttpClientTestingModule,
      ],
      declarations: [LoginComponent],
      providers: [FirebaseService], // if you wanna test then it has to be part of testing module. so we should add the service here
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check the title variable text', () => {
    expect(h1.textContent).toContain('Sign in');
  });
});

//DOM test buttons working for navigation.
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let service:FirebaseService;
  let router: RouterTestingModule;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        HttpClientTestingModule,
      ],
      declarations: [LoginComponent],
      providers: [FirebaseService], // if you wanna test then it has to be part of testing module. so we should add the service here
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    router=TestBed.inject(RouterTestingModule)
    service = TestBed.inject(FirebaseService);
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing the registration buttons calling/navigating registration page "DOM Test"', ()=>{
    spyOn(component.router, 'navigate')//.and.returnValue(true);
    const btn= de.query(By.css('#btnRegister'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.router.navigate).toHaveBeenCalledWith(['registration']);
  })
  it('Testing the forget password buttons calling/navigating forget password page "DOM Test"', ()=>{
    spyOn(component.router, 'navigate')//.and.returnValue(true);
    const btn= de.query(By.css('#btnForget'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.router.navigate).toHaveBeenCalledWith(['forget-password']);
  })

  it('Testing the login buttons calling login function from authservice  "DOM Test"', ()=>{
    spyOn(component.firebaseService, 'login')//.and.returnValue(true);
    const btn= de.query(By.css('#btnLogin'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(service.login).toHaveBeenCalled();
  })
});




