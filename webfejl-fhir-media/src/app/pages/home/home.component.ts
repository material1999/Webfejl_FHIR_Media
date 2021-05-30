import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Media } from 'src/app/shared/models/media.model';
import { MEDIUM } from './../../shared/database/media.database';
import { MatDialog } from '@angular/material/dialog';
import { MediaAddComponent } from '../media-add/media-add.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  media = MEDIUM;

  constructor(
    private fbs: FbBaseService<Media>,
    public router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fbs.addAll('media', this.media);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(MediaAddComponent, {});
    dialogRef.afterClosed().subscribe((media: Media) => {
      if (!media.createdDateTime) {
        media.createdDateTime = Date.now();
      }
      this.fbs
        .add('media', media)
        .then((result) => {
          window.alert('Added media successfully!');
        })
        .catch((error) => {
          console.log(error.message);
        });
    });
  }
}
