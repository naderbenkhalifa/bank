import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from 'src/icinBank-api/src/models';
import { TransactionsService } from 'src/icinBank-api/src/services';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
transactions:Transaction[]=[];
accountId:number=0;
  constructor(private service:TransactionsService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.accountId=this.route.snapshot.params.id;
   
   
    this.service.retrieveAccountTransactions(this.accountId).subscribe(res=>{
      this.transactions=res;
    },
   error=>{
    
      this.router.navigate(['/']);

   });
  }
  

}
