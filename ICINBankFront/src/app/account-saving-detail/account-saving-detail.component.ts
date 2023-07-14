import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SavingsAccount } from 'src/icinBank-api/src/models';
import { SavingAccountsService } from 'src/icinBank-api/src/services';

@Component({
  selector: 'app-account-saving-detail',
  templateUrl: './account-saving-detail.component.html',
  styleUrls: ['./account-saving-detail.component.scss']
})
export class AccountSavingDetailComponent implements OnInit {
  savingAccount:SavingsAccount={}
  accountNumber:number=0;

  constructor(private service:SavingAccountsService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.accountNumber=this.route.snapshot.params.id;
   
   
    this.service.getAccountByAccountNumber(this.accountNumber).subscribe(res=>{
      this. savingAccount=res;
    },
  
    
      

   );

  }

}
