import { inject, Inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';

import { Router } from '@angular/router';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { UserInterface } from './user.interface';
import {
  addDoc,
  collection,
  CollectionReference,
  doc,
  Firestore,
  getDoc,
  getDocs,
  query,
  where,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore); // inject Cloud Firestor
  private userDataSubject = new BehaviorSubject<any>(null);
  // Observable que les autres composants peuvent écouter
  public userData$ = this.userDataSubject.asObservable();

  constructor(private router: Router) {}

  signIn(email: string, username: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = {
          uid: userCredential.user.uid,
          email: email,
          username: username,
        };
        const usersRef = collection(this.firestore, 'users');
        addDoc(usersRef, user);
        console.log('User created', user);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  logIn(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then(async (userCredential) => {
        const uid = userCredential.user.uid;
        console.log('User logged in', userCredential.user);
        const user = userCredential.user;
        const usersRef = collection(this.firestore, 'users');
        const q = query(usersRef, where('uid', '==', uid));

        this.router.navigate(['/']);

        // 3. Exécuter la requête
        const querySnapshot = await getDocs(q);

        // 4. Extraire les données
        const userData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
        }));

        console.log('User logged in', userData);
        if (userData.length > 0) {
          this.userDataSubject.next(userData[0]); 
        } else {
          this.userDataSubject.next(null);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('User not logged in');
        alert('User not logged in');
      });
  }


  logOut() {
    this.auth.signOut().then(() => {
      console.log('User logged out');
      alert('User logged out');
      this.router.navigate(['/login']);
    });
  }
}
