import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSavingAccountComponent } from './search-saving-account.component';
import { Router } from '@angular/router';

describe('SearchSavingAccountComponent', () => {
  let component: SearchSavingAccountComponent;
  let fixture: ComponentFixture<SearchSavingAccountComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchSavingAccountComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
      
        
       
       
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSavingAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
