import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrimaryAccountComponent } from './add-primary-account.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('AddPrimaryAccountComponent', () => {
  let component: AddPrimaryAccountComponent;
  let fixture: ComponentFixture<AddPrimaryAccountComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPrimaryAccountComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
        
        
        ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrimaryAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
