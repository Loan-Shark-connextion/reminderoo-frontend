import { getCookie as getCookieNext, setCookie } from 'cookies-next';
import { OptionsType } from 'cookies-next/lib/types';

import { ACCESS_TOKEN_KEY } from './constants/storageKeys';

export const getNextCookieStore = () => {
  const { cookies } = require('next/headers');

  return cookies();
};

export const getCookie = (name: string) => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    const cookiesStore = getNextCookieStore();

    return cookiesStore.get(name)?.value;
  }

  return getCookieNext(name);
};

export const setAccessToken = (accessToken: string, options?: OptionsType) => {
  const MAX_AGE_ACCESS_TOKEN = 60 * 60 * 24 * 7; // 1 week

  setCookie(ACCESS_TOKEN_KEY as string, accessToken, {
    maxAge: MAX_AGE_ACCESS_TOKEN,
    ...options
  });
};

export const setUsername = (username: string) => {
  setCookie('username', username);
};
