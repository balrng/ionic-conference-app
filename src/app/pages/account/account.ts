import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { UserData } from '../../providers/user-data';
import { TokenService } from '../../services/token.service';
import { JwtTokenHelper } from '../../services/auth-token';
import { DecodedToken } from '../../models/generic/decoded-token';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit,OnInit {
  username: string;
  data:DecodedToken | null;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData,
    public tokenService: TokenService,
    private tokenhelper: JwtTokenHelper,
    private cdRef: ChangeDetectorRef
  ) { 
    //this.data = this.tokenhelper.getToken();
    
  }
  ionViewWillEnter(){
    this.data = this.tokenhelper.getToken();
    console.log('AccountPage execute ionViewWillEnter');
  }

  ionViewDidLoad() {
    console.log('AccountPage execute ionViewDidLoad');
  }

  ngOnInit(): void {
    this.data = this.tokenhelper.getToken();
    console.log('my Profile');
    console.log(this.data);
  }

  ngAfterViewInit() {
    this.getUsername();
    this.data = this.tokenhelper.getToken();
    console.log('my Profile');
    console.log(this.data);
    this.cdRef.detectChanges();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  async changeUsername() {
    const alert = await this.alertCtrl.create({
      header: 'Change Username',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.userData.setUsername(data.username);
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
  }

  getUsername() {
    this.userData.getUsername().then((username) => {
      this.username = username;
    });
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  logout() {

    this.userData.logout().then(() => {
      this.tokenService.removeToken();
      return this.router.navigateByUrl('/login');
    });

    // this.tokenService.removeToken();
    // this.userData.logout();
    // this.router.navigateByUrl('/login');
  }

  support() {
    this.router.navigateByUrl('/support');
  }
}
