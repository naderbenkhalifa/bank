import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-transaction',
  templateUrl: './search-transaction.component.html',
  styleUrls: ['./search-transaction.component.scss']
})
export class SearchTransactionComponent implements OnInit {
  accountId:number=0;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public retrieveAccountTransactions(accountId: number){
   
    this.router.navigate(['/transactions',accountId]);
  }


}
