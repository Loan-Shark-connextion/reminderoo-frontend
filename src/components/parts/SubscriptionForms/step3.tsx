'use client';

import { useEffect } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useStep2Form } from '@/context/step2Global';
import { useStep3Form } from '@/context/step3Global';
import { step3Schema } from '@/lib/validations/add';

import { StepFormProps } from './types';

const Step3Form = ({ prevData, currentId }: StepFormProps<z.infer<typeof step3Schema>>) => {
  const router = useRouter();
  const priceGlobal = useStep2Form((state) => state.price);
  const emailGlobal = useStep3Form((state) => state.email);
  const timeGlobal = useStep3Form((state) => state.time);
  const setEmailGlobal = useStep3Form((state) => state.setEmail);
  const setTimeGlobal = useStep3Form((state) => state.setTime);

  const step3Form = useForm<z.infer<typeof step3Schema>>({
    resolver: zodResolver(step3Schema)
  });

  function onSubmit(values: z.infer<typeof step3Schema>) {
    console.log(values, '333333333333333333');

    setEmailGlobal(values.email);
    setTimeGlobal(values.time);

    if (currentId) {
      return router.push(`/edit/${currentId}/confirm`);
    }

    return router.push('/add/confirm');
  }

  useEffect(() => {
    console.log(priceGlobal, 'PPPPPPPPPPPPPPPPPPP');
    console.log(timeGlobal, 'TTTTTTTTTTTTTTTT');
    step3Form.reset({
      time: timeGlobal ? timeGlobal : prevData?.time,
      email: emailGlobal || prevData?.email
    });

    // if you reload this will trigger because for some reason global state isn't there in the very beginning
    if (!priceGlobal) {
      router.replace('/dashboard');
    }
  }, [router, step3Form, timeGlobal, emailGlobal, priceGlobal, prevData?.time, prevData?.email]);

  return (
    <Card className="px-6 py-8">
      <Form {...step3Form}>
        <form onSubmit={step3Form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={step3Form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>Remind me</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger className="bg-primary-0 mt-2">
                      <SelectValue placeholder={field.value ? `${field.value} days before` : 'Select reminder'} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">1 day before</SelectItem>
                    <SelectItem value="3">3 days before</SelectItem>
                    <SelectItem value="5">5 days before</SelectItem>
                    <SelectItem value="7">1 week before</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={step3Form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className='after:content-["*"] after:ml-0.5 after:text-red-500'>Remind With</FormLabel>
                <FormControl>
                  <div className="flex">
                    <div className="flex items-center text-primary-55 text-body-md gap-2 pl-4 border rounded-l">
                      <Mail className="w-6 h-6" />
                      Email
                      <Separator orientation="vertical" />
                    </div>

                    <Input type="email" placeholder="Enter email" {...field} className="rounded-l-none" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-2">
            {/* {!currentId ? (
              <Loader2 className="text-secondary-40 animate-spin" />
            ) : (
              <> */}
            <Link href={currentId ? `/edit/${currentId}/step-2` : '/add/step-2'}>
              <Button type="button" variant="secondary">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Prev
              </Button>
            </Link>
            <Button type="submit">
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            {/* </>
            )} */}
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default Step3Form;
