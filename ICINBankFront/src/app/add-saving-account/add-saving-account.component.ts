import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SavingsAccount } from 'src/icinBank-api/src/models';
import { SavingAccountsService } from 'src/icinBank-api/src/services';


@Component({
  selector: 'app-add-saving-account',
  templateUrl: './add-saving-account.component.html',
  styleUrls: ['./add-saving-account.component.scss']
})
export class AddSavingAccountComponent implements OnInit {
  savingAccount:SavingsAccount={}


  constructor(private service:SavingAccountsService,private router:Router) { }

  ngOnInit(): void {
  }
  public  addSavingAccount( savingAccount:SavingsAccount){
    this.service.save(savingAccount ).subscribe(res=>{
      this. savingAccount=res;
      this.router.navigate(['/navabar']);

     
      
    })
  }


}
