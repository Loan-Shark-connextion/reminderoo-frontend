import { ACCESS_TOKEN_KEY } from './constants/storageKeys';
import { getCookie } from './cookies';

interface FetcherProps extends RequestInit {
  url: string;
  filters?: URLSearchParams;
  options?: Record<string, unknown>;
}

export const fetcher = async ({ method = 'GET', url, filters, ...args }: FetcherProps) => {
  const accessToken = getCookie(ACCESS_TOKEN_KEY as string);

  const finalURL = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`);

  if (filters) {
    filters.forEach((value, key) => {
      finalURL.searchParams.append(key, value as string);
    });
  }

  const headers: HeadersInit = {
    ...(!args?.options?.isFormData && { 'Content-Type': 'application/json' }),
    ...args?.headers
  };

  if (accessToken) {
    Object.assign(headers, { authorization: `Bearer ${accessToken}` });
  }

  try {
    const response = await fetch(finalURL, {
      method,
      headers,
      ...args
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    throw error;
  }
};
