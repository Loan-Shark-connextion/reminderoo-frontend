import Transaction from '@/components/parts/Transaction';
import { Card } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

const PaymentHistory = () => {
  return (
    <section className="bg-primary-0 p-7 rounded-lg lg:col-span-4">
      <article className="flex flex-col gap-5">
        <h6 className="font-medium text-primary-80 text-heading-6">Payment History</h6>
        <Card className="flex flex-col justify-center items-center text-center gap-4 py-10 px-24">
          <h1 className="font-semibold text-primary-80 text-heading-1">Rp60.000</h1>
          <p className="font-medium text-primary-50 text-body-md">Total subscription cost</p>
          <Select>
            <SelectTrigger className="w-[6.9rem]">
              <SelectValue placeholder="This Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">This Year</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
            </SelectContent>
          </Select>
        </Card>

        <Separator />

        <div className="flex flex-col gap-6">
          <Transaction appName="Creative Cloud" date="15 June 2024" pricing={20} />
          <Transaction appName="Creative Cloud" date="15 May 2024" pricing={20} />
          <Transaction appName="Creative Cloud" date="15 April 2024" pricing={20} />
        </div>
      </article>
    </section>
  );
};

export default PaymentHistory;
