import { Pipe, PipeTransform } from '@angular/core';
import { Media } from '../../models/media.model';

@Pipe({
  name: 'video'
})
export class VideoPipe implements PipeTransform {

  transform(medium: Media[]) {
    return medium.filter(media => media.type === 'video');
  }

}
