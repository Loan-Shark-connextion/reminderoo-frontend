'use client';

import { useEffect, useState } from 'react';

import { ArrowLeft, Check, Edit3, FilmIcon, MoreHorizontal, Trash2, X } from 'lucide-react';

import ConfirmationModal from '@/components/parts/ConfirmationModal';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';

const SubscriptionDetail = () => {
  const [warningOpen, setWarningOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleSuccessOpen = () => {
    setSuccessOpen(!successOpen);
  };

  const handleWarningOpen = () => {
    setWarningOpen(!warningOpen);
  };

  useEffect(() => {
    console.log(warningOpen);
  }, [warningOpen]);
  return (
    <section className="bg-primary-0 p-7 rounded-lg lg:col-span-8">
      {/* <article className="flex flex-col gap-7"> */}
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <ArrowLeft />
          </Button>
          <h6 className="font-medium text-heading-6">Subscription Detail</h6>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[10.75rem]">
            <DropdownMenuItem className="text-secondary-40 gap-2 focus:text-secondary-40">
              <Edit3 className="w-5 h-5" /> Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-destructive-foreground gap-2
            focus:bg-destructive focus:text-destructive-foreground"
            >
              <Trash2 className="w-5 h-5" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <article className="flex flex-col gap-7 mt-7">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            {/* <img
               src="https://placeimg.com/200/200/people"
               width={52}
               height={52}
               className="rounded-xl"
              /> */}
            <div className="w-12 h-12 flex justify-center items-center bg-violet-500 rounded-xl">
              <FilmIcon />
            </div>
            <div>
              <h6 className="font-semibold text-heading-6">Creative Cloud</h6>
              <p className="font-medium text-primary-50 text-body-sm">Work</p>
            </div>
          </div>

          <div className="flex gap-2">
            <ConfirmationModal
              imagePath="/modal-icons/success.png"
              openState={successOpen}
              openHandler={handleSuccessOpen}
              title="Congratulations!"
              description="Your subscription has been marked as paid."
            >
              <Button variant="secondary">
                <Check /> Mark as Paid
              </Button>
            </ConfirmationModal>

            <ConfirmationModal
              imagePath="/modal-icons/warning.png"
              openState={warningOpen}
              openHandler={handleWarningOpen}
              title="Are you sure?"
              description="Once cancelled, you will not be able to reactivate your subscription."
              cancleable
            >
              <Button variant="destructive">
                <X /> Cancel Subscription
              </Button>
            </ConfirmationModal>
          </div>
        </div>

        <Card className="flex justify-between items-center p-4 h-20">
          <div>
            <p className="font-medium text-primary-50 text-body-sm">Status</p>
            <Badge variant="upcoming" status="upcoming">
              Upcoming
            </Badge>
          </div>
          <Separator orientation="vertical" />
          <div>
            <p className="font-medium text-primary-50 text-body-sm">Payment Method</p>
            <p className="font-medium text-body-lg">Dana</p>
          </div>
          <Separator orientation="vertical" />
          <div>
            <p className="font-medium text-primary-50 text-body-sm">Status</p>
            <p className="font-medium text-body-lg">15 July 2024</p>
          </div>
          <Separator orientation="vertical" />
          <div>
            <p className="font-medium text-primary-50 text-body-sm">Status</p>
            <p className="font-medium text-body-lg">Rp25.000</p>
          </div>
        </Card>
        <Separator />

        <div className="flex gap-[6rem]">
          <div className="flex flex-col gap-3">
            <p className="font-medium text-primary-55 text-body-md">Subscription Name</p>
            <p className="font-medium text-primary-55 text-body-md">Category</p>
            <p className="font-medium text-primary-55 text-body-md">Price</p>
            <p className="font-medium text-primary-55 text-body-md">Cycle</p>
            <p className="font-medium text-primary-55 text-body-md">Start Payment</p>
            <p className="font-medium text-primary-55 text-body-md">Next Payment</p>
            <p className="font-medium text-primary-55 text-body-md">Payment Method</p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-medium text-primary-90 text-body-md">Creative Cloud</p>
            <p className="font-medium text-primary-90 text-body-md">Work</p>
            <p className="font-medium text-primary-90 text-body-md">Rp25.000</p>
            <p className="font-medium text-primary-90 text-body-md">Monthly</p>
            <p className="font-medium text-primary-90 text-body-md">15 March 2024</p>
            <p className="font-medium text-primary-90 text-body-md">15 July 2024</p>
            <p className="font-medium text-primary-90 text-body-md">Dana - 08123456789</p>
          </div>
        </div>
      </article>

      {/* </article> */}
    </section>
  );
};

export default SubscriptionDetail;
