import { inject, Inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private auth = inject(Auth);
  constructor() { }

  signIn(email: string, password: string){
    createUserWithEmailAndPassword(this.auth, email,password ).then((userCredential) => {
      console.log("User created");

    
      const user = userCredential.user;

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}
  
  logIn(email: string, password: string){
    signInWithEmailAndPassword(this.auth, email, password).then((userCredential) => {
      console.log("User logged in");
      const user = userCredential.user;

      alert("User logged in");

    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("User not logged in");
      alert("User not logged in");
      
  });

}}
