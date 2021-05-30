import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CATEGORIES } from './../../shared/database/category.database';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChangeMailComponent } from '../change-mail/change-mail.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  categories = CATEGORIES;
  loggedIn: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

  ngOnInit() {
    this.authService
      .currentUserObservable()
      .subscribe((auth: { email: any }) => {
        if (auth) {
          this.loggedIn = auth.email;
        }
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ChangeMailComponent, {
      data: { loggedIn: this.loggedIn },
    });
    dialogRef.afterClosed().subscribe(
      (user: { email: string; newEmail: string; password: string }) => {
        this.authService
          .changeMail(user.email, user.newEmail, user.password)
          .then((result) => {
            window.alert('Successfully changed email!');
          })
          .catch((error) => {
            window.alert(error.message);
          });
      },
      (err) => {
        console.warn(err);
      }
    );
  }
}
