import { GetGifs } from '../models/gif.model';

export const MOCK_GIFS_RESPONSE: GetGifs = {
  data: [
    {
      title: 'Party',
      id: '1',
      source_post_url: 'https://www.reddit.com/r/MealPrepSunday/comments/eb7kem/my_first_meal_prep_beef_and_broccoli_lunches/',
      images: {
        original: {
          webp: 'https://media.giphy.com/media/CKhJIoIGLwL2o/giphy.gif',
          height: '400',
          width: '400',
        }
      },
    },
    {
      title: 'Rock n Roll',
      id: '2',
      source_post_url: 'https://www.reddit.com/r/MealPrepSunday/comments/eb51qh/french_toast_shepards_pie_and_mini_frittatas_this/',
      images: {
        original: {
          webp: 'https://media.giphy.com/media/CKhJIoIGLwL2o/giphy.gif',
          height: '400',
          width: '400',
        },
      },
    },
    {
      title: 'Fiesta',
      id: '3',
      source_post_url: 'https://www.reddit.com/r/MealPrepSunday/comments/eb7kem/my_first_meal_prep_beef_and_broccoli_lunches/',
      images: {
        original: {
          webp: 'https://media.giphy.com/media/CKhJIoIGLwL2o/giphy.gif',
          height: '400',
          width: '400',
        },
      },
    },
    {
      title: 'Metallica',
      id: '4',
      source_post_url: 'https://www.reddit.com/r/MealPrepSunday/comments/eb51qh/french_toast_shepards_pie_and_mini_frittatas_this/',
      images: {
        original: {
          webp: 'https://media.giphy.com/media/CKhJIoIGLwL2o/giphy.gif',
          height: '400',
          width: '400',
        },
      },
    },
  ],
  pagination: {
    total_count: 20,
    offset: 0,
    count: 10,
  }
};
