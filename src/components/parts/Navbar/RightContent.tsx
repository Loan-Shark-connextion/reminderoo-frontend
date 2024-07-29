'use client';

import { useState } from 'react';

import { ArrowUpRightIcon, Bell, ChevronDown, X } from 'lucide-react';
import Link from 'next/link';

import NotificationCard from '@/components/parts/Navbar/NotificationCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';

const RightContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-center items-center gap-5">
      <Popover open={isOpen} onOpenChange={handleOpen}>
        <PopoverTrigger>
          <Bell />
        </PopoverTrigger>

        <PopoverContent className="w-[21rem] flex flex-col gap-5 mt-3 lg:mr-[8rem]">
          <div className="flex justify-between">
            <p className="font-medium text-body-md text-primary-70">Notifications</p>
            <X onClick={handleOpen} className="cursor-pointer" />
          </div>
          <div className="flex flex-col gap-2">
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
            <Link
              href="/notification"
              className="flex justify-center items-center text-body-xs text-secondary-45 mt-2 hover:underline"
            >
              See all notifications
              <ArrowUpRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </PopoverContent>
      </Popover>

      <Separator orientation="vertical" />

      <Popover>
        <PopoverTrigger>
          <div className="flex justify-center items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <ChevronDown />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-44 flex flex-col p-1 mr-8">
          <Button
            className="justify-start text-body-sm text-primary-80 
          bg-primary-0 hover:bg-secondary-0 hover:text-secondary-40"
          >
            My Profile
          </Button>
          <Button
            className="justify-start text-body-sm text-primary-80 
          bg-primary-0 hover:bg-secondary-0 hover:text-secondary-40"
          >
            General Settings
          </Button>
          <Separator className="my-1" />
          <Button variant="destructive" className="justify-start hover:bg-destructive-hover">
            Sign out
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default RightContent;
