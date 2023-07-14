import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from 'src/icinBank-api/src/models';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.scss']
})
export class NavabarComponent implements OnInit {
  user:User={}

  constructor(private router:Router,public authService:AuthService) { }

  ngOnInit(): void {
  }
  /*handleAccount(account:any){
    if(account==="Primary")
        this.router.navigate(["primary-Account"])
    else
      this.router.navigate(["saving-Account"])
  }*/

}


