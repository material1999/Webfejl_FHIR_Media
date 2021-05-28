import { Media } from '../models/media.model';

export const MEDIUM: Media[] = [
  {
    identifier: ['01'],
    status: 'completed',
    type: 'image',
    subject: 'Patient 2749',
    createdDateTime: new Date("2017-12-17").getTime(),
    issued: new Date("2017-12-17T14:56:18Z"),
    operator: 'Mr. White',
    device: "X-Ray Machine 2000",
    height: 540,
    width: 647,
    frames: 1,
    content: "https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/142/2018/02/03013155/X-Ray-Wellington-Digital-Imaging.jpg"
  },
  {
    identifier: ['02'],
    status: 'completed',
    type: 'image',
    subject: 'Patient 2749',
    createdDateTime: new Date("2017-12-17").getTime(),
    issued: new Date("2017-12-17T14:56:18Z"),
    operator: 'Mr. White',
    device: "X-Ray Machine 2000",
    height: 540,
    width: 647,
    frames: 1,
    content: "https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/142/2018/02/03013155/X-Ray-Wellington-Digital-Imaging.jpg"
  },
  {
    identifier: ['03'],
    status: 'completed',
    type: 'picture',
    subject: 'Patient 2749',
    createdDateTime: new Date("2017-12-17").getTime(),
    issued: new Date("2017-12-17T14:56:18Z"),
    operator: 'Mr. White',
    device: "X-Ray Machine 2000",
    height: 540,
    width: 647,
    frames: 1,
    content: "https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/142/2018/02/03013155/X-Ray-Wellington-Digital-Imaging.jpg"
  }
];
