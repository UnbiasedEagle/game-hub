import { useQuery } from '@tanstack/react-query';
import { platforms } from '../data/platforms';
import { ApiClient } from '../services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

export const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: platforms.length, results: platforms, next: null },
  });
