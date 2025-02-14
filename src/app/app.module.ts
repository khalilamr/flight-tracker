import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';


const firebaseConfig = {
  apiKey: "AIzaSyByKlw9o9AaXJvu_e87htAtjEDc9HFnD7U",
  authDomain: "flight-tracker-c2a45.firebaseapp.com",
  projectId: "flight-tracker-c2a45",
  storageBucket: "flight-tracker-c2a45.firebasestorage.app",
  messagingSenderId: "92224601522",
  appId: "1:92224601522:web:8d73a37e6c70a406bf78ab",
  measurementId: "G-4JZ26JTQ67"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
