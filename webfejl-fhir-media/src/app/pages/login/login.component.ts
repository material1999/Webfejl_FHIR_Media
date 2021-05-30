import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService, private dialog: MatDialog) {}

  ngOnInit(): void {}

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.minLength(6),
      Validators.required,
    ]),
  });
  alertMessage = '';
  alertsList: any = {
    user: () => 'Email or password is invalid',
    server: () => 'Service unavailable',
    false: () => '',
  };

  openDialog(): void {
    const dialogRef = this.dialog.open(RegistrationComponent, {});
    dialogRef.afterClosed().subscribe((user: {email: string, password: string, passwordAgain: string}) => {
      if (user.email && user.password === user.passwordAgain) {
        this.authService.registration(user.email, user.password);
      } else {
        window.alert("Passwords don't match!");
      }
    }, err => {
      console.warn(err);
    });
  }

  @HostListener('document:keydown.enter') onKeydownHandler() {
    this.login();
  }

  navTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  login(): void {
    if (this.form.invalid) {
      return;
    }
    this.authService
      .login(this.form.value.email, this.form.value.password)
      .then(
        (result) => {
          console.log(result);
          this.navTo('/home');
        },
        (error) => {
          this.alertMessage =
            error.code === 'auth/user-not-found' ||
            error.code === 'auth/wrong-password'
              ? this.alertsList.user()
              : this.alertsList.server();
        }
      );
  }

}
