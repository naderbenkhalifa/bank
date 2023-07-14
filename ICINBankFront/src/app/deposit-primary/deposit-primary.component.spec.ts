import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositPrimaryComponent } from './deposit-primary.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('DepositPrimaryComponent', () => {
  let component: DepositPrimaryComponent;
  let fixture: ComponentFixture<DepositPrimaryComponent>;
  let el: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositPrimaryComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
      
        
       
       
      ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call deposit method', () => {
    spyOn(component, 'deposit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.deposit).toHaveBeenCalledTimes(1);
  });
});
