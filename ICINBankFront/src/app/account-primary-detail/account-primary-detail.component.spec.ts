import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPrimaryDetailComponent } from './account-primary-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';

describe('AccountPrimaryDetailComponent', () => {
  let component: AccountPrimaryDetailComponent;
  let fixture: ComponentFixture<AccountPrimaryDetailComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  const activatedRouteSpy = {
    snapshot: {
      params:({
     
        id:'123'
      })
    }
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountPrimaryDetailComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy }
        
        
        ],
      imports: [ HttpClientTestingModule ]
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPrimaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
