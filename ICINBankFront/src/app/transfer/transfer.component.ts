import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'src/icinBank-api/src/models';
import { TransactionsService } from 'src/icinBank-api/src/services';


@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  transaction:Transaction={}

  constructor(private service:TransactionsService,private router:Router) { }

  ngOnInit(): void {
  }

  createTransaction(transaction:Transaction){

    this.service.transferMoney(transaction).subscribe(res=>{
      this.transaction=res;
     

     
      
    })




  }

}
