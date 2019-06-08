import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PhoneComponent } from './phone/phone.component';
import { AuthGuard } from './auth-guards/auth.guard';



const routes: Routes = [
  { path : '', component : LoginComponent, canActivate: [AuthGuard] },
  { path : 'login', component : LoginComponent, canActivate: [AuthGuard] },
  {path : 'login-phone', component : PhoneComponent, canActivate: [AuthGuard]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalAuthRoutingModule { }
