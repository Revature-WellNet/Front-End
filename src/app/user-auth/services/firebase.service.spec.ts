<<<<<<< HEAD
// import { TestBed } from '@angular/core/testing';
=======
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';
>>>>>>> e515d2dce64a0a86b4880279b96592bffee900c8

// import { FirebaseService } from './firebase.service';

// describe('FirebaseService', () => {
//   let service: FirebaseService;

<<<<<<< HEAD
//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(FirebaseService);
//   });
=======
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase),
        HttpClientTestingModule,
      ],
      declarations: [],
      providers: [],
    }).compileComponents();
  });
>>>>>>> e515d2dce64a0a86b4880279b96592bffee900c8

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
