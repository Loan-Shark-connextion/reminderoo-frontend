import { FilmIcon } from 'lucide-react';

// date should probably be type Date and icon is either a file path(string) or a ReactNode
export interface TransactionProps {
  appName: string;
  date: string;
  pricing: number;
}

const Transaction = ({ appName, date, pricing }: TransactionProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex justify-center items-center bg-violet-500 rounded-xl">
          <FilmIcon />
        </div>
        <div>
          <p className="font-medium text-primary-80 text-body-lg">{appName}</p>
          <p className="font-medium text-primary-50 text-body-sm">{date}</p>
        </div>
      </div>
      <h6 className="font-semibold text-primary-80 text-heading-6">- Rp{pricing}.000</h6>
    </div>
  );
};

export default Transaction;
