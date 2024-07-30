import { WalletWithCards } from '@/assets/icons';
import { Badge } from '@/components/ui/badge';

const SubCard = ({ history }: { history?: boolean }) => {
  return (
    <div className="flex justify-center items-center gap-10">
      <div className="flex justify-center items-center gap-3 py-3">
        <div className="w-11 h-11 flex justify-center items-center rounded-xl bg-red-500">
          <WalletWithCards />
        </div>
        <div>
          <p className="font-semibold text-body-md">Creative Cloud</p>
          <p className="font-semibold text-body-xs text-primary-50">Work</p>
        </div>
      </div>
      <div className="flex flex-col justify-end items-center">
        <p className="font-semibold text-body-xs text-primary-55">10 July 2024</p>
        {history ? (
          <p className="font-semibold text-body-md text-primary-80">-Rp 20.000</p>
        ) : (
          <Badge className="bg-destructive-badge text-destructive-foreground hover:bg-destructive-hover">
            7 Days Left
          </Badge>
        )}
      </div>
    </div>
  );
};

export default SubCard;
