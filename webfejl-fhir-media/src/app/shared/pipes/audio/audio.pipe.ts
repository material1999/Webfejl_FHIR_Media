import { Pipe, PipeTransform } from '@angular/core';
import { Media } from '../../models/media.model';

@Pipe({
  name: 'audio'
})
export class AudioPipe implements PipeTransform {

  transform(medium: Media[]) {
    return medium.filter(media => media.type === 'audio');
  }

}
