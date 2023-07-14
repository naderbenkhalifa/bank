//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//import { ChequeBook, Transaction, User } from 'src/icinBank-api/src/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

 /* requestChequeBook(chequeObj:ChequeBook,userObj:User){
    let objs = {
      "chequebook":chequeObj,
      "user":userObj
    }
    return this.http.post("http://localhost:8040/ICINBank/createcheque",chequeObj);
  }
  getAccountBalance(accountId:number){
    return this.http.get(`http://localhost:8040/ICINBank/accounts/${accountId}/balance`)
  }

  withdrawMoney(accType:String, accNo:number, amount:number){
    return this.http.get(`http://localhost:8040/ICINBank/withdraw/${accType}/${accNo}/${amount}`);
  }

  getTransactions(accountId:number){
    console.log(accountId);
    return this.http.get(`http://localhost:8040/ICINBank/accounts/${accountId}/transactions`)
  }
  depositMoney( accType:String, accNo:number, amount:number){
  
  

    return this.http.get(`http://localhost:8040/ICINBank/deposit/${accType}/${accNo}/${amount}`);
  }
  transferFund(obj:Transaction){
    return this.http.post("http://localhost:8040/ICINBank/transfer",obj);
  }*/
}
