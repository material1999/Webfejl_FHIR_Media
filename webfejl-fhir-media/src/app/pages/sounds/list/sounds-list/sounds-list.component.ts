import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Media } from 'src/app/shared/models/media.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sounds-list',
  templateUrl: './sounds-list.component.html',
  styleUrls: ['./sounds-list.component.scss'],
})
export class SoundsListComponent implements OnInit {
  title = 'Sounds';
  list: Media[] = [];
  getSub: Subscription | null = null;
  pageState = '';

  constructor(private service: FbBaseService<Media>, private router: Router) {}

  ngOnInit(): void {
    this.get();
  }

  ngOnDestroy(): void {
    if (this.getSub) {
      this.getSub.unsubscribe();
    }
  }

  get(): void {
    this.pageState = 'loading';
    this.getSub = this.service.get('media').subscribe(
      (result) => {
        if (result?.length > 0) {
          this.list = result;
          this.pageState = 'data';
        } else {
          this.pageState = 'noData';
        }
      },
      (err) => {
        console.log(err);
        this.pageState = '';
      }
    );
  }

  onGetSound(event: Media): void {
    this.router.navigateByUrl('/details/sound/' + event.id);
  }
}
