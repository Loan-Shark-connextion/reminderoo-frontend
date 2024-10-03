import { deleteCookie } from 'cookies-next';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Identicon from 'react-identicons';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ACCESS_TOKEN_KEY } from '@/lib/constants/storageKeys';
import { getCookie } from '@/lib/cookies';

const RightContent = () => {
  const router = useRouter();

  const logout = () => {
    deleteCookie(ACCESS_TOKEN_KEY as string);

    router.replace('/login');
  };

  return (
    <div className="hidden justify-center items-center gap-5 lg:flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex justify-center items-center gap-3 hover:bg-transparent p-0">
            <Avatar>
              <AvatarFallback>
                <Identicon string={getCookie('userId')} size={16} />
              </AvatarFallback>
            </Avatar>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44 flex flex-col p-1 mr-8">
          <Link href="/profile">
            <DropdownMenuItem>My Profile</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator className="my-1" />
          <DropdownMenuItem
            className="bg-destructive text-destructive-foreground 
          focus:bg-destructive/80 focus:text-destructive-foreground/80"
            onClick={logout}
          >
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default RightContent;
