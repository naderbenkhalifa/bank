import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositSavingComponent } from './deposit-saving.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('DepositSavingComponent', () => {
  let component: DepositSavingComponent;
  let fixture: ComponentFixture<DepositSavingComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositSavingComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
      
        
       
       
      ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
