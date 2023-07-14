import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawSavingComponent } from './withdraw-saving.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('WithdrawSavingComponent', () => {
  let component: WithdrawSavingComponent;
  let fixture: ComponentFixture<WithdrawSavingComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawSavingComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
        
        
        ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
