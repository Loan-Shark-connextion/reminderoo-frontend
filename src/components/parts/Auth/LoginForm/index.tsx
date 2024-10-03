'use client';

import { useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCookie } from 'cookies-next';
import { jwtDecode } from 'jwt-decode';
import { AlertCircle, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useUserId } from '@/context/UserIdGlobal';
import { ACCESS_TOKEN_KEY } from '@/lib/constants/storageKeys';
import { getCookie, setAccessToken, setUsername } from '@/lib/cookies';
import { loginSchema } from '@/lib/validations/auth';
import { login } from '@/repositories/auth';

const LoginForm = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const setUserId = useUserId((state: any) => state.setUserId);
  const [reveal, setReveal] = useState(false);
  const [expiredToken, setExpiredToken] = useState(false);

  const accessToken = getCookie(ACCESS_TOKEN_KEY as string);

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.isVerified) {
        console.log('verify email mutation here');
      }

      setAccessToken(data?.accessToken);
      setUserId(data?.user?.id);
      setUsername(data?.user?.username);

      toast.success('Login successful');
      queryClient.invalidateQueries();

      router.replace('/dashboard');
    }
  });

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema)
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
    loginMutation.mutate(values);
  }

  const handleReveal = () => {
    setReveal(!reveal);
  };

  useEffect(() => {
    if (accessToken) {
      try {
        const decoded = jwtDecode(accessToken);
        const currentTime = Math.floor(Date.now() / 1000);

        if (decoded.exp && decoded.exp < currentTime) {
          setExpiredToken(true);
          deleteCookie(ACCESS_TOKEN_KEY as string);
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, [accessToken]);

  return (
    <Form {...loginForm}>
      {expiredToken && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
        </Alert>
      )}
      <form onSubmit={loginForm.handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <FormField
          control={loginForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="yourmail@gmail.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={loginForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative flex justify-center items-center">
                  <Input placeholder="Enter your password" type={reveal ? 'text' : 'password'} {...field} />
                  <div className="absolute right-3 text-primary-40" onClick={handleReveal}>
                    {reveal ? <EyeOff /> : <Eye />}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col justify-center gap-4 overflow-hidden max-md:mt-[8.5rem]">
          <Button type="submit">Sign In</Button>

          <p className="font-medium text-primary-45 text-center">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="text-secondary-40 hover:underline">
              Register now
            </Link>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
