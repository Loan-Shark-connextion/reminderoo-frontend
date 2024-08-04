'use client';

import { ReactNode } from 'react';

import { X } from 'lucide-react';
import Image from 'next/image';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';

export interface ConfirmationModalProps {
  children: ReactNode;
  imagePath: string;
  openState: boolean;
  openHandler: () => void;
  title: string;
  description: string;
  cancleable?: boolean;
}

const ConfirmationModal = ({
  imagePath,
  openState,
  openHandler,
  title,
  description,
  cancleable,
  children
}: ConfirmationModalProps) => {
  return (
    <AlertDialog open={openState} onOpenChange={openHandler}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <X onClick={openHandler} className="self-end cursor-pointer" />
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex justify-center items-center mb-4">
              <Image src={imagePath} width={53} height={53} alt="warning" />
            </div>
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-primary-50">{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {cancleable && <AlertDialogCancel>Cancel</AlertDialogCancel>}
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationModal;
