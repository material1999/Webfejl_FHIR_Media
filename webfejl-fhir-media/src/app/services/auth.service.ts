import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async logout(): Promise<void> {
    await this.afAuth.signOut();
  }

  login(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  authenticated(): boolean {
    return this.afAuth.authState !== null;
  }

  currentUserObservable(): any {
    return this.afAuth.authState;
  }

  registration(email: string, password: string): Promise<any> {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('You have been successfully registered!');
        this.navTo('/home');
        console.log(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  navTo(url: string): void {
    this.router.navigateByUrl(url);
  }
}
