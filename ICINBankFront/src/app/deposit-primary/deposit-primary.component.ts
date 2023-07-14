import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimaryAccount } from 'src/icinBank-api/src/models';
import { ParimaryAccountsService } from 'src/icinBank-api/src/services';


@Component({
  selector: 'app-deposit-primary',
  templateUrl: './deposit-primary.component.html',
  styleUrls: ['./deposit-primary.component.scss']
})
export class DepositPrimaryComponent implements OnInit {
  primaryAccount:PrimaryAccount={};
  accountBalance:number=0
 
 params={
  accNo: 0,
  amount:0
  }
 



  constructor(private service:ParimaryAccountsService,private router:Router) {
    
 
   }

  ngOnInit(): void {
    
  }

  retrieveAccountBalance(accountNumber: number){
this.service.retrieveAccountBalance(accountNumber).subscribe(res=>{
  this.accountBalance=res;
 

 
  
})
}

 deposit() {

  this.service.deposit(this.params).subscribe(res=>{
    this.accountBalance=res;
   })
 }



}
