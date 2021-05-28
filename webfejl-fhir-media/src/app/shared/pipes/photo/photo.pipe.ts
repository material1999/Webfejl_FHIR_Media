import { Pipe, PipeTransform } from '@angular/core';
import { Media } from '../../models/media.model';

@Pipe({
  name: 'photo'
})
export class PhotoPipe implements PipeTransform {

  transform(medium: Media[]) {
    return medium.filter(media => media.type === 'image');
  }

}
