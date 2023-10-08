import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { platforms } from '../data/platforms';
import { ApiClient } from '../services/api-client';
import { Platform } from '../entities/Platform';

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

export const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  });
