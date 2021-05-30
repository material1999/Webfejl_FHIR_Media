import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Media } from 'src/app/shared/models/media.model';
import { MEDIUM } from './../../shared/database/media.database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  media = MEDIUM;

  constructor(private fbs: FbBaseService<Media>, public router: Router) {}

  ngOnInit(): void {
    this.fbs.addAll('media', this.media);
  }

}
