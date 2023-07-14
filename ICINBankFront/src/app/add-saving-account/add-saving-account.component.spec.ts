import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSavingAccountComponent } from './add-saving-account.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('AddSavingAccountComponent', () => {
  let component: AddSavingAccountComponent;
  let fixture: ComponentFixture<AddSavingAccountComponent>;
  let el: HTMLElement;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSavingAccountComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: Router, useValue: routerSpy },
        
        
        ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSavingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call addSavingAccount method', () => {
    spyOn(component,'addSavingAccount');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.addSavingAccount).toHaveBeenCalledTimes(1);
  });
});
