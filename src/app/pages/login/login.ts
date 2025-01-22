import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { TokenService } from '../../services/token.service';
import { AuthService } from '../../services/auth.service';
import { LoginView } from '../../models/data/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { JwtTokenHelper } from '../../services/auth-token';
import { environment } from '../../../environments/environment';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage implements OnInit {
  login: LoginView = { userName: 'amr0547460788@gmail.com', password: '' };
  errorMsg: Todo | string;
  submitted = false;
  apiAdress:string='';
  testData: any;

  constructor(
    private userData: UserData,
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService,
    private tokenHelper: JwtTokenHelper
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.apiAdress = environment.apiBaseUrl;
  }
  ngOnInit(): void {
    if (this.tokenService.isAuthenticated()) {
      //this.userData.login(this.login.userName);
      this.router.navigateByUrl('/account');
    }

  }


  ontest(form: NgForm) {
    if (form.valid) {
      this.authService.getTestLocalizer().subscribe(
        (response: any) => {
          this.errorMsg = response;

        },
        (error: any) => {
          console.error('Login error message:', error.error); 
          this.errorMsg = `${error.error} - ${error.statusText} - ${error.message} -  ${error.headers} - ${error.name} - ${error.status}`;
        }
      );
     }
  }

  onLoginHttp(form: NgForm) {
    if (form.valid) {
      this.authService.loginHttp(this.login).subscribe(
        (response: any) => {
          const token = response.token;
          this.tokenService.saveToken(token);
          this.tokenHelper.setToken(token);
          this.userData.login(this.login.userName);
          this.router.navigateByUrl('/account');

        },
        (error: any) => {
          console.error('Login error message:', error.error); 
          this.errorMsg = `${error.error} - ${error.statusText} - ${error.message} -  ${error.headers} - ${error.name} - ${error.status}`;
        }
      );
     }
  }

  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.authService.login(this.login).subscribe(
        (response: any) => {
          const token = response.token;
          this.tokenService.saveToken(token);
          this.tokenHelper.setToken(token);
          this.userData.login(this.login.userName);
          this.router.navigateByUrl('/account');

        },
        (error: any) => {
          console.error('Login error message:', error.error); //Alert use
          this.errorMsg = `${error.error} - ${error.statusText} - ${error.message} -  ${error.headers} - ${error.name} - ${error.status}`;
        }
      );
     }
    // else {

    // }

    // this.authService.getTestData().subscribe(
    //   (data) => {
    //     this.errorMsg = data;
    //   },
    //   (error) => {
    //     console.error('API isteği hatası:', error);
    //     this.errorMsg = `${error.error} - ${error.statusText} - ${error.message} -  ${error.headers} - ${error.name} - ${error.status}`;
    //   }
    // );

    // this.authService.postTestData(this.newTodo).subscribe(
    //   (data) => {
    //     console.log('Yeni kayıt oluşturuldu:', data);
    //     this.errorMsg = data;
    //   },
    //   (error) => {
    //     console.error('API isteği hatası:', error);
    //   }
    // );

  }
  

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
