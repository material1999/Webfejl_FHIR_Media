import { Component, OnInit } from '@angular/core';
import { MEDIUM } from './../../shared/database/media.database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  media = MEDIUM;

  constructor() {}

  ngOnInit(): void {}
}
