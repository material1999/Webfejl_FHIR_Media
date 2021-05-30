import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Media } from 'src/app/shared/models/media.model';

@Component({
  selector: 'app-videos-card',
  templateUrl: './videos-card.component.html',
  styleUrls: ['./videos-card.component.scss'],
})
export class VideosCardComponent implements OnInit {
  @Input() video: Media = {} as any;
  @Output() getVideo = new EventEmitter<Media>();

  constructor(private fbs: FbBaseService<Media>) {}

  ngOnInit(): void {}

  deleteVideo(): void {
    this.fbs.delete('media', this.video.id as any);
  }

  openURL(url: string): void {
    window.open(url);
  }
}
