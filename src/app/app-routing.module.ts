import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { checkTutorialGuard } from './providers/check-tutorial.guard';
import { AuthGuard } from './authguard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
    
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule),
    
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule),
    canMatch: [checkTutorialGuard]
  },
  // {
  //   path: 'contact',
  //   loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  // },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  // },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
