import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavabarComponent } from './navabar.component';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NavabarComponent', () => {
  let component: NavabarComponent;
  let fixture: ComponentFixture<NavabarComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavabarComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
        
        
        ],
        imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavabarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
