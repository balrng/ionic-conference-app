import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators,ReactiveFormsModule } from '@angular/forms';
import { IonicModule,IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonButton,IonInput, IonText,IonSelect,IonSelectOption  } from '@ionic/angular';

import { LoginPage } from './login';
import { LoginPageRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    RouterModule,FormsModule, CommonModule,ReactiveFormsModule
  ],
  declarations: [
    LoginPage,
  ]
})

export class LoginModule { }
