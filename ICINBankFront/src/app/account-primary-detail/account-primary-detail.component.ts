import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimaryAccount } from 'src/icinBank-api/src/models';
import { ParimaryAccountsService } from 'src/icinBank-api/src/services';

@Component({
  selector: 'app-account-primary-detail',
  templateUrl: './account-primary-detail.component.html',
  styleUrls: ['./account-primary-detail.component.scss']
})
export class AccountPrimaryDetailComponent implements OnInit {
  primaryAccount:PrimaryAccount={}

  accountNumber:number=0;

  constructor(private service:ParimaryAccountsService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.accountNumber=this.route.snapshot.params.id;
   
   
    this.service.getAccountByAccountNumber(this.accountNumber).subscribe(res=>{
      this. primaryAccount=res;
    },
   
    
      

   );

  }

}
