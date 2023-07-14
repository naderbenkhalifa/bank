import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimaryAccount } from 'src/icinBank-api/src/models';
import { ParimaryAccountsService } from 'src/icinBank-api/src/services';


@Component({
  selector: 'app-withdraw-primary',
  templateUrl: './withdraw-primary.component.html',
  styleUrls: ['./withdraw-primary.component.scss']
})
export class WithdrawPrimaryComponent implements OnInit {

  primaryAccount:PrimaryAccount={};
  accountBalance:number=0;
  

  params={
  accNo: 0,
  amount:0
  }
 


  constructor(private service:ParimaryAccountsService,private router:Router) { }

  ngOnInit(): void {
  }

  Withdraw(){
    this.service.withdraw(this.params).subscribe(res=>{
      this.accountBalance=res;
     })




  }

}


