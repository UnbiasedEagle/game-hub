import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { genres } from '../data/genre';
import { ApiClient } from '../services/api-client';
import { Genre } from '../entities/Genre';

const apiClient = new ApiClient<Genre>('/genres');

export const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });
