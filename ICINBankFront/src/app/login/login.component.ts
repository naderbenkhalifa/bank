import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/icinBank-api/src/models';

import { AuthService } from '../auth.service';
import { UsersService } from 'src/icinBank-api/src/services';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:User={};
  message:string=""
  email:string=""
  password:string=""
  

  constructor(public  userService:UsersService ,public  router: Router,private authService:AuthService) { }

  ngOnInit(): void {
  }

  /*public  signIn(){
    this.userService.addUserLogin(this.user).subscribe(res=>{
      
      
      this.router.navigate(['/loginsucces']
      )
      
    },
      
      error => {
      
      this.message="email or password is incorrect."
      });
    
  }*/

  onSubmit() {
    
this.authService.login(this.user).subscribe(res => {
      this.router.navigate(['/navabar'])
    },
     
    error => {
      
      this.message=" email or password is incorrect. "
      });
    
  }

}
