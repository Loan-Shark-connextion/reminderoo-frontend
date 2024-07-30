import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { Separator } from '@/components/ui/separator';

import SubCard from './SubCard';

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-6 lg:grid lg:col-span-3">
      <div className="flex flex-col items-center gap-6">
        <article className="flex flex-col gap-3">
          <h6 className="text-heading-6 font-semibold">Next Payment</h6>
          <div className=" bg-primary-0 rounded-xl w-[21rem]">
            <div className="px-5">
              <SubCard />
              <Separator />
              <SubCard />
              <Separator />
              <SubCard />
            </div>
          </div>
        </article>

        <article className="flex flex-col gap-3">
          <h6 className="text-heading-6 font-semibold">Payment History</h6>
          <div className="w-[21rem] bg-primary-0 rounded-xl">
            <div className="px-5">
              <SubCard history />
              <Separator />
              <SubCard history />
              <Separator />
              <SubCard history />

              <Separator />
              <Link href="/history" className="link py-3">
                <p>See all History Payments</p>
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </aside>
  );
};

export default Sidebar;
