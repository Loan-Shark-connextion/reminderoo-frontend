'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Eye, EyeOff, Mail } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { registerSchema } from '@/lib/validations/auth';
import { register } from '@/repositories/auth';

const RegisterForm = () => {
  const router = useRouter();
  const [revealPassword, setRevealPassword] = useState(false);
  const [revealConfirm, setRevealConfirm] = useState(false);

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log(data?.user, 'registerrerererewewewewe');
      toast.success('Account created successfully');
    }
  });

  const registerForm = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema)
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    const payload = { email: values.email, name: values.name, password: values.password };
    registerMutation.mutate(payload);

    router.replace('/login');
  }

  const handleRevealPassword = () => {
    setRevealPassword(!revealPassword);
  };

  const handleRevealConfirm = () => {
    setRevealConfirm(!revealConfirm);
  };

  const googleSignIn = () => {
    console.log('google sign in');
  };

  return (
    <Form {...registerForm}>
      <form onSubmit={registerForm.handleSubmit(onSubmit)} className="flex flex-col space-y-8">
        <FormField
          control={registerForm.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={registerForm.control}
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
          control={registerForm.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative flex justify-center items-center">
                  <Input placeholder="Enter your password" type={revealPassword ? 'text' : 'password'} {...field} />
                  <div className="absolute right-3 text-primary-40" onClick={handleRevealPassword}>
                    {revealPassword ? <EyeOff /> : <Eye />}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
              <FormDescription>Minimum of 6 characters</FormDescription>
            </FormItem>
          )}
        />

        <FormField
          control={registerForm.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <div className="relative flex justify-center items-center">
                  <Input placeholder="Confirm your password" type={revealConfirm ? 'text' : 'password'} {...field} />
                  <div className="absolute right-3 text-primary-40" onClick={handleRevealConfirm}>
                    {revealConfirm ? <EyeOff /> : <Eye />}
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col justify-center gap-4 overflow-hidden">
          <Button type="submit">Submit</Button>
          <div className="flex justify-center items-center gap-3">
            <Separator className="w-1/2" />
            <p className="font-medium text-primary-35 text-body-md">or</p>
            <Separator className="w-1/2" />
          </div>
          <Button variant="outline" type="button" onClick={googleSignIn}>
            <Mail className="w-4 h-4 mr-2" />
            Sign in With Google
          </Button>
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

export default RegisterForm;
