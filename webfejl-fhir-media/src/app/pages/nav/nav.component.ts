import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CATEGORIES } from './../../shared/database/category.database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit{

  categories = CATEGORIES;
  loggedIn : any;

  constructor(private router: Router, private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

  ngOnInit() {
    this.authService.currentUserObservable().subscribe((auth: { email: any; })=>{
      if(auth){
        this.loggedIn = auth.email;
       }
    })
  }
}
