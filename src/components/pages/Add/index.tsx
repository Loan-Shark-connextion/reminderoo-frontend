'use client';

import { useState } from 'react';

import { ArrowLeft, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';

import { ArrowLine } from '@/assets/icons';
import ConfirmationModal from '@/components/parts/Modals/ConfirmationModal';
import { ConfirmFormSteps, Step1Form, Step2Form, Step3Form } from '@/components/parts/SubscriptionForms';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { useStep1Form } from '@/context/step1Global';
import { useStep2Form } from '@/context/step2Global';
import { useStep3Form } from '@/context/step3Global';
import { useClearGlobals } from '@/hooks/useClearGlobals';

const Add = () => {
  const isMobileScreen = useMediaQuery({ query: '(max-width: 760px)' });
  const pathname = usePathname();
  const [warningOpen, setWarningOpen] = useState(false);
  const appNameGlobal = useStep1Form((state) => state.appName);
  const priceGlobal = useStep2Form((state) => state.price);
  const emailGlobal = useStep3Form((state) => state.email);
  const clearGlobals = useClearGlobals();

  const handleWarningOpen = () => {
    setWarningOpen(!warningOpen);
  };

  return (
    <section className="flex justify-center items-center col-span-12">
      <main className="bg-primary-0 rounded-lg p-4">
        <header className="flex items-center gap-3 mb-8">
          <ConfirmationModal
            imagePath="/modal-icons/warning.png"
            openState={warningOpen}
            openHandler={handleWarningOpen}
            clickEvent={clearGlobals}
            title="Are you sure?"
            description="Once canceled, you will not be able to recover this subscription!"
            cancleable
          >
            <Button variant="outline">
              <ArrowLeft />
            </Button>
          </ConfirmationModal>
          <h6 className="font-medium text-heading-6">Add Subscription</h6>
        </header>

        <section className="flex flex-col gap-4">
          <Breadcrumb className="px-10 mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                {/* {pathname === '/add/step-1' ? (
                  <BreadcrumbPage
                    order={1}
                    className="text-primary-80"
                    isCurrent={pathname === '/add/step-1'}
                    isFilled={!!appNameGlobal}
                  >
                    Subscription Info
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink order={1} href="/add/step-1" isFilled={!!appNameGlobal}>
                    Subscription Info
                  </BreadcrumbLink>
                )} */}

                <BreadcrumbPage order={1} isFilled={!!appNameGlobal} isCurrent={pathname === '/add/step-1'}>
                  Subscription Info
                </BreadcrumbPage>
              </BreadcrumbItem>

              <BreadcrumbSeparator>{isMobileScreen ? <ChevronDown /> : <ArrowLine />}</BreadcrumbSeparator>

              <BreadcrumbItem>
                {/* {pathname === '/add/step-2' ? (
                  <BreadcrumbPage
                    order={2}
                    className="text-primary-80"
                    isCurrent={pathname === '/add/step-2'}
                    isFilled={!!priceGlobal}
                  >
                    Payment Detail
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink order={2} href="/add/step-2" isFilled={!!priceGlobal}>
                    Payment Detail
                  </BreadcrumbLink>
                )} */}

                <BreadcrumbPage order={2} isFilled={!!priceGlobal} isCurrent={pathname === '/add/step-2'}>
                  Payment Detail
                </BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator>{isMobileScreen ? <ChevronDown /> : <ArrowLine />}</BreadcrumbSeparator>
              <BreadcrumbItem>
                {/* {pathname === '/add/step-3' ? (
                  <BreadcrumbPage
                    order={3}
                    className="text-primary-80"
                    isCurrent={pathname === '/add/step-3'}
                    isFilled={!!emailGlobal}
                  >
                    Reminder Settings
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink order={3} href="/add/step-3" isFilled={!!emailGlobal}>
                    Reminder Settings
                  </BreadcrumbLink>
                )} */}

                <BreadcrumbPage
                  order={3}
                  isFilled={!!emailGlobal}
                  isCurrent={pathname === '/add/step-3'}
                  // className={`${pathname === '/add/step-3' && 'text-primary-80'}`}
                >
                  Reminder Settings
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {pathname === '/add/step-1' && <Step1Form />}
          {pathname === '/add/step-2' && <Step2Form />}
          {pathname === '/add/step-3' && <Step3Form />}
          {pathname === '/add/confirm' && <ConfirmFormSteps />}
        </section>
      </main>
    </section>
  );
};

export default Add;
