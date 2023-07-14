import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SavingsAccount } from 'src/icinBank-api/src/models';
import { SavingAccountsService } from 'src/icinBank-api/src/services';


@Component({
  selector: 'app-deposit-saving',
  templateUrl: './deposit-saving.component.html',
  styleUrls: ['./deposit-saving.component.scss']
})
export class DepositSavingComponent implements OnInit {

  savingsAccount:SavingsAccount={};
  accountBalance:number=0
 
 params={
  accNo: 0,
  amount:0
  }
 


  constructor(private service:SavingAccountsService,private router:Router) { }

  ngOnInit(): void {
  }

  deposit() {

    this.service.deposit(this.params).subscribe(res=>{
      this.accountBalance=res;
     })
   }


}
