import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { LoginView } from '../../models/data/user.model';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage implements OnInit {
  login: LoginView = { userName: 'amr0547460788@gmail.com', password: '' };
  errorMsg: string = null;
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    public tokenService:TokenService,
    public authService:AuthService,
  ) { }
  ngOnInit(): void {
    if(this.tokenService.isAuthenticated())
    {
      //this.userData.login(this.login.userName);
      this.router.navigateByUrl('/app/tabs/dashboard');
    }
      
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.authService.login(this.login).subscribe(
        (response:any) => {
          const token = response.token;
          this.tokenService.saveToken(token);
          this.userData.login(this.login.userName);
          this.router.navigateByUrl('/app/tabs/dashboard');
          //this.router.navigateByUrl('/about');
        },
        (error:HttpErrorResponse) => {
          console.error('Login error message:', error.error); //Alert use
          this.errorMsg =  error.error;
        }
      );

      
    }
    else{

    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
