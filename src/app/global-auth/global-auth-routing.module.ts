import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PhoneComponent } from './phone/phone.component';



const routes: Routes = [
  { path : '', component : LoginComponent },
  { path : 'login', component : LoginComponent },
  {path : 'login-phone', component : PhoneComponent,},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalAuthRoutingModule { }
