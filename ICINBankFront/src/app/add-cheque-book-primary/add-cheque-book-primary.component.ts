import { Component, OnInit } from '@angular/core';
import { ChequeBook, PrimaryAccount } from 'src/icinBank-api/src/models';
import { ChequeBooksService } from 'src/icinBank-api/src/services';


@Component({
  selector: 'app-add-cheque-book-primary',
  templateUrl: './add-cheque-book-primary.component.html',
  styleUrls: ['./add-cheque-book-primary.component.scss']
})
export class AddChequeBookPrimaryComponent implements OnInit {
  chequeBook:ChequeBook={}
  primaryAccount:PrimaryAccount={}
  

  constructor(private service :ChequeBooksService ) {
   this.chequeBook.primaryAccount=this.primaryAccount!;
   
    
   }

  ngOnInit(): void {
  }

  createChequeBook(chequeBook:ChequeBook){
    this.service.create(chequeBook).subscribe(res=>{
      this.chequeBook=res;
     
      
      

     
      
    })

  }
}
