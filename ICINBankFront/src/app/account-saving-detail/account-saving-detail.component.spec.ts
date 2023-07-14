import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSavingDetailComponent } from './account-saving-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router } from '@angular/router';

describe('AccountSavingDetailComponent', () => {
  let component: AccountSavingDetailComponent;
  let fixture: ComponentFixture<AccountSavingDetailComponent>;
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
      declarations: [ AccountSavingDetailComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy }
       
       
       
      ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSavingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
