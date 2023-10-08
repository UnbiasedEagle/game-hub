import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  next: string | null;
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '075dec536dbd462f92b7a9d05c5d8bb8',
  },
});

export class ApiClient<T> {
  constructor(public endpoint: string) {}

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: string | number) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + id)
      .then((res) => res.data);
  };
}
