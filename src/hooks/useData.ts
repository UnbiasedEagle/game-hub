import { useEffect, useState } from 'react';
import { apiClient } from '../services/api-client';
import { CanceledError } from 'axios';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export const useData = <T>(endpoint: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err.message);
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, [endpoint]);

  return { data, error, isLoading };
};
