import { fetcher } from '@/lib/fetcher';

export const login = async ({ email }: { email: string }) => {
  const response = await fetcher({
    url: '/login',
    method: 'POST',
    body: JSON.stringify({ email })
  });

  return response;
};

export const register = async (payload: Record<string, unknown>) => {
  const response = await fetcher({
    url: '/register',
    method: 'POST',
    body: JSON.stringify(payload)
  });

  return response;
};
