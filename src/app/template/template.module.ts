import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
  					HeaderComponent, 
  					FooterComponent, 
  					MainComponent, 
  					WelcomeComponent, 
  ],

  imports: [
    				CommonModule,
    				MDBBootstrapModulesPro,
    				RouterModule,
  ],

  exports: [
    				HeaderComponent,
    				FooterComponent,
    				MainComponent,
    				WelcomeComponent,
  ]
})



export class TemplateModule { }
