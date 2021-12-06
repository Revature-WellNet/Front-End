import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpTestCtrl: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[UserService]

    });
   
  });
beforeEach(()=>{
let  service = TestBed.inject(UserService);
let httpTestCtrl=TestBed.inject(HttpTestingController)
})

  it('should be created', () => {
    expect(service instanceof UserService).toBeTruthy();
  });

  xit('Should Test HttpClient.get ', () => {
    
    service.getUser("uid").subscribe(res=>{

    })
  
  const req=httpTestCtrl.expectOne(service.BASE_URL+1)

    }); 
});
