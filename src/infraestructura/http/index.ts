import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'https://gutendex.com/';

const getHeaders = async (token: string) => {
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  return {};
};

const get = async <T>(path: string, token: string): Promise<T> => {
  const data: AxiosResponse = await axios.get(
    `${BASE_URL}${path}`,

    await getHeaders(token)
  );
  return data.data as T;
};

export const http = {
  get,
  getHeaders,
};
