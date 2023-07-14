import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-primary-account',
  templateUrl: './search-primary-account.component.html',
  styleUrls: ['./search-primary-account.component.scss']
})
export class SearchPrimaryAccountComponent implements OnInit {
  accountNumber:number=0;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public retrieveAccountPrimary(accountNumber: number){
   
    this.router.navigate(['/account-primary-detail',accountNumber]);
  }

}
