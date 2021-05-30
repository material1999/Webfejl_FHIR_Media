import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Media } from 'src/app/shared/models/media.model';

@Component({
  selector: 'app-sounds-card',
  templateUrl: './sounds-card.component.html',
  styleUrls: ['./sounds-card.component.scss'],
})
export class SoundsCardComponent implements OnInit {
  @Input() sound: Media = {} as any;
  @Output() getSound = new EventEmitter<Media>();

  constructor(private fbs: FbBaseService<Media>) {}

  ngOnInit(): void {}

  deleteSound(): void {
    this.fbs.delete('media', this.sound.id as any);
  }
}
