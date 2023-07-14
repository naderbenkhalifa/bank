import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawPrimaryComponent } from './withdraw-primary.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('WithdrawPrimaryComponent', () => {
  let component: WithdrawPrimaryComponent;
  let fixture: ComponentFixture<WithdrawPrimaryComponent>;
  let el: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrawPrimaryComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
        
        
        ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call Withdraw method', () => {
    spyOn(component, 'Withdraw');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.Withdraw).toHaveBeenCalledTimes(1);
  });
});
