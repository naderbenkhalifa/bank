import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPrimaryAccountComponent } from './search-primary-account.component';
import { Router } from '@angular/router';

describe('SearchPrimaryAccountComponent', () => {
  let component: SearchPrimaryAccountComponent;
  let fixture: ComponentFixture<SearchPrimaryAccountComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPrimaryAccountComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
      
        
       
       
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPrimaryAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
