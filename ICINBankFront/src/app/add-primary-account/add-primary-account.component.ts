import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimaryAccount } from 'src/icinBank-api/src/models';
import { ParimaryAccountsService } from 'src/icinBank-api/src/services';


@Component({
  selector: 'app-add-primary-account',
  templateUrl: './add-primary-account.component.html',
  styleUrls: ['./add-primary-account.component.scss']
})
export class AddPrimaryAccountComponent implements OnInit {
  primaryAccount:PrimaryAccount={}


  constructor(private service:ParimaryAccountsService,private router:Router) { }

  ngOnInit(): void {
  }

  public  addPrimaryAccount( primaryAccount:PrimaryAccount){
    this.service.save( primaryAccount).subscribe(res=>{
      this.primaryAccount=res;
      this.router.navigate(['/navabar']);

     
      
    })
  }


}
