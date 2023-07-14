import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-saving-account',
  templateUrl: './search-saving-account.component.html',
  styleUrls: ['./search-saving-account.component.scss']
})
export class SearchSavingAccountComponent implements OnInit {
  accountNumber:number=0;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public retrieveAccountSaving(accountNumber: number){
   
    this.router.navigate(['/account-saving-detail',accountNumber]);
  }

}
