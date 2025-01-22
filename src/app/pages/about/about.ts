import { Component, OnInit } from '@angular/core';

import { PopoverController } from '@ionic/angular';

import { PopoverPage } from '../about-popover/about-popover';
import { DecodedToken } from '../../models/generic/decoded-token';
import { JwtTokenHelper } from '../../services/auth-token';
import { UserService } from '../../services/user.service';
import { User } from '../../models/data/user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
})
export class AboutPage implements OnInit {
  location = 'austin';
  conferenceDate = '2025-05-17';
  headers = ['CompanyName-Ar', 'CompanyName-En', 'Username', 'NameAr', 'Expr.Date', 'Role'];

  selectOptions = {
    header: 'Select a Location'
  };

  itemcount:number = 0;

  tokenData: DecodedToken | null;
  pageData: User | null = null;
  constructor(public popoverCtrl: PopoverController, tokenhelper: JwtTokenHelper,
    private userService: UserService) {

    this.tokenData = tokenhelper.getToken();
  }

  ngOnInit(): void {
    console.log('AboutPage ngOnInit');
    if (!this.tokenData) {
      console.error('Token not found');
      return;
    }

    this.userService.getIndex(this.tokenData.agent_id, this.tokenData.fleet_id).subscribe(
      (response: any) => {
        this.pageData = response;
        this.itemcount = response.length;
      },
      (error: HttpErrorResponse) => {
        console.error('Error:', error.error);
      }
    );
  }


  handleRefresh(event: any) {
    // Burada mevcut data yükleme metodunuzu çağırın
    this.loadData().then(() => {
      // Yükleme tamamlandığında refresher'ı kapatın
      event.target.complete();
    });
  }

  async loadData() {
    this.userService.getIndex(this.tokenData.agent_id, this.tokenData.fleet_id).subscribe(
      (response: any) => {
        this.pageData = response;
        this.itemcount = response.length;
      },
      (error: HttpErrorResponse) => {
        console.error('Error:', error.error);
      }
    );
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }
}
