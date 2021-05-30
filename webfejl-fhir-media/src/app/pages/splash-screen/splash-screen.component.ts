import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from './../../shared/database/category.database';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  categories = CATEGORIES;

  constructor() { }

  ngOnInit(): void {
  }

}
