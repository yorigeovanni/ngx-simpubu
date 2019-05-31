/* ================================================================= APP MODULE */
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* ================================================================= COMMON MODULE */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/* ================================================================= FIREBASE MODULE */
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';

/* ================================================================= NGRX MODULE */
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

/* ================================================================= TEMPLATE MODULE */
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { TemplateModule } from './template/template.module';
import { NotFoundComponent } from './pages-errors/not-found/not-found.component';


@NgModule({
  declarations: [
                  AppComponent,
                  NotFoundComponent
  ],


  imports: [
  	              MDBBootstrapModulesPro.forRoot(),
                  BrowserModule,
                  AppRoutingModule,
                  TemplateModule,
                  HttpClientModule,

                  // firebase import
                  AngularFireModule.initializeApp(environment.firebase),
                  AngularFireAuthModule,
                  AngularFirestoreModule,
                  AngularFireDatabaseModule,

                  //ngRXImport
                  //StoreModule.forRoot(reducers, { metaReducers }),
                  //!environment.production ? StoreDevtoolsModule.instrument() : [],
                  //EffectsModule.forRoot([])
  ],


  providers: [MDBSpinningPreloader, { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})



export class AppModule { }
