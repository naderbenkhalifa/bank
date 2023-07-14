import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChequeBookPrimaryComponent } from './add-cheque-book-primary.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('AddChequeBookPrimaryComponent', () => {
  let component: AddChequeBookPrimaryComponent;
  let fixture: ComponentFixture<AddChequeBookPrimaryComponent>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChequeBookPrimaryComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChequeBookPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call createChequeBook method', () => {
    spyOn(component,'createChequeBook');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.createChequeBook).toHaveBeenCalledTimes(1);
  });
});
