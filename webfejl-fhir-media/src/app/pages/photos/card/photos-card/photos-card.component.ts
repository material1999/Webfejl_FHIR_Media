import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Media } from 'src/app/shared/models/media.model';

@Component({
  selector: 'app-photos-card',
  templateUrl: './photos-card.component.html',
  styleUrls: ['./photos-card.component.scss']
})
export class PhotosCardComponent implements OnInit {
  @Input() photo: Media = {} as any;
  @Output() getPhoto = new EventEmitter<Media>();

  constructor(private fbs: FbBaseService<Media>) { }

  ngOnInit(): void {
  }

  deleteImage(): void {
    this.fbs.delete("media", this.photo.id as any);
  }

}
