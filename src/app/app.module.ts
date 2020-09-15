import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TravelHomeComponent } from './travel-home/travel-home.component';
import { TravelRegisterComponent } from './travel-register/travel-register.component';
import { TravelContactusComponent } from './travel-contactus/travel-contactus.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ShowTravelComponent } from './show-travel/show-travel.component';
import { AngularFireAuthModule } from '@angular/fire/auth';



@NgModule({
  declarations: [
    AppComponent,
    TravelHomeComponent,
    TravelRegisterComponent,
    TravelContactusComponent,
    ShowTravelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
