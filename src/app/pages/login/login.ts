import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage implements OnInit {
  login: UserOptions = { username: 'amr0547460788@gmail.com', password: '' };
  submitted = false;

  constructor(
    public userData: UserData,
    public router: Router,
    public tokenService:TokenService,
    public authService:AuthService,
  ) { }
  ngOnInit(): void {
    if(this.tokenService.hasToken())
    {
      this.userData.login(this.login.username);
      this.router.navigateByUrl('/app/tabs/dahboard');
    }
      
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      // this.authService.login(this.loginForm.value).subscribe(
      //   (response:any) => {
      //     const token = response.token;
      //     this.tokenService.saveToken(token);
      //     //this.router.navigateByUrl('/about');
      //   },
      //   (error:HttpErrorResponse) => {
      //     console.error('Login error message:', error.error); //Alert use
      //     this.errorMsg = "Invalid Username or Password!";
      //   }
      // );
      this.userData.login(this.login.username);
      this.tokenService.saveToken('123456');

      this.router.navigateByUrl('/app/tabs/dashboard');
    }
    else{

    }
  }

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
