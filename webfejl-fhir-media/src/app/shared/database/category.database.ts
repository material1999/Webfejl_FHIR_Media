import { Category } from '../models/category.model';

export const CATEGORIES: Category[] = [
  {
    title: 'Photos',
    icon: 'image',
    value: 'photo',
    color: 'cyan',
    url: '/home/photos',
  },
  {
    title: 'Videos',
    icon: 'movie',
    value: 'movie',
    color: 'teal',
    url: '/home/videos',
  },
  {
    title: 'Sounds',
    icon: 'music_note',
    value: 'sound',
    color: '#c2185b',
    url: '/home/sounds',
  },
];
