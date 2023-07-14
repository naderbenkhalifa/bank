import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTransactionComponent } from './search-transaction.component';
import { Router } from '@angular/router';

describe('SearchTransactionComponent', () => {
  let component: SearchTransactionComponent;
  let fixture: ComponentFixture<SearchTransactionComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTransactionComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
      
        
       
       
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
