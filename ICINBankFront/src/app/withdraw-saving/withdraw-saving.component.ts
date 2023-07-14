import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SavingsAccount } from 'src/icinBank-api/src/models';
import { SavingAccountsService } from 'src/icinBank-api/src/services';


@Component({
  selector: 'app-withdraw-saving',
  templateUrl: './withdraw-saving.component.html',
  styleUrls: ['./withdraw-saving.component.scss']
})
export class WithdrawSavingComponent implements OnInit {
  savingAccount:SavingsAccount={};
  accountBalance:number=0;
  

  params={
  accNo: 0,
  amount:0
  }
 

  constructor(private service:SavingAccountsService,private router:Router) { }

  ngOnInit(): void {
  }

  Withdraw(){
    this.service.withdraw(this.params).subscribe(res=>{
      this.accountBalance=res;
     })




  }




}
