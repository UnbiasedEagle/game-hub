import { genres } from '../data/genre';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export const useGenres = () => ({
  data: genres,
  isLoading: false,
  error: null,
});
