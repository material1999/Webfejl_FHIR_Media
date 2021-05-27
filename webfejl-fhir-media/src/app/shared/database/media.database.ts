import { Media } from '../models/media.model';

export const MEDIUM: Media[] = [
  {
    identifier: ['01'],
    status: 'completed',
    type: 'image',
    modality: 'diagram',
    subject: 'Patient/xcda',
    createdDateTime: new Date("2017-12-17"),
    issued: new Date("2017-12-17T14:56:18Z"),
    operator: 'Practitioner/xcda-author',
    device: "Acme Camera",
    height: 145,
    width: 126,
    frames: 1,
    content: "https://www.cnet.com/a/img/wr9LIsKHBBffQepa7AMHMMqMEl4=/1200x675/2019/10/09/c4f49e5f-459e-4c9f-bfc9-9e4e9d6256d5/nikon-z50-10.jpg"
  }
];
