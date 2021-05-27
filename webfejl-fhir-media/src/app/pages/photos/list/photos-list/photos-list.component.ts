import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Media } from 'src/app/shared/models/media.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss']
})
export class PhotosListComponent implements OnInit {
  title = 'Photos';
  list: Media[] | null = null;
  getSub: Subscription | null = null;
  pageState = '';

  constructor(private service: FbBaseService<Media>, private router: Router) { }

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.pageState = 'loading';
    this.getSub = this.service.get('media').subscribe(
      result => {
        if (result?.length > 0) {
          this.list = result;
          this.pageState = 'data';
        } else {
          this.pageState = 'noData';
        }
      },
      err => {
        console.log(err);
        this.pageState = '';
      });
  }

  onGetMovie(event: Media): void {
    this.router.navigateByUrl('/details/movie/' + event.id);
  }

}
