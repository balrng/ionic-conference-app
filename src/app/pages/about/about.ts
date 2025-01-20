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

  selectOptions = {
    header: 'Select a Location'
  };

  tokenData: DecodedToken | null;
  pageData: User | null = null;
  constructor(public popoverCtrl: PopoverController, tokenhelper: JwtTokenHelper,
    private userService: UserService) {

    this.tokenData = tokenhelper.getToken();
  }

  ngOnInit(): void {
    if (!this.tokenData) {
      console.error('Token not found');
      return;
    }

    this.userService.getIndex(this.tokenData.agent_id, this.tokenData.fleet_id).subscribe(
      (response: any) => {
        this.pageData = response;
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
