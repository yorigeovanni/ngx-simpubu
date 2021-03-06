import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { AutoGeneratedComponent } from './auto-generated/auto-generated.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/auto-generated',
      pathMatch: 'full',
  },
  {
      path: 'auto-generated',
      component: AutoGeneratedComponent,
  },
];

@NgModule({
  imports: [
              NativeScriptRouterModule.forRoot(routes),
              RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
           ],

  exports: [NativeScriptRouterModule,
            RouterModule,
            ]
})


export class AppRoutingModule { }
