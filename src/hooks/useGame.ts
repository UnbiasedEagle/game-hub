import { useQuery } from '@tanstack/react-query';
import { ApiClient } from '../services/api-client';
import { Game } from './useGames';

const apiClient = new ApiClient<Game>('/games');

export const useGame = (slug: string) => {
  return useQuery({
    queryKey: ['games', slug],
    queryFn: () => apiClient.get(slug),
  });
};
