import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const NotificationCard = () => {
  return (
    <div
      className={cn(
        'flex p-2 gap-3 rounded-xl transition-colors hover:bg-primary-20',
        'border-b border-b-primary-20'
      )}
    >
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2">
        <p className="text-body-xs text-primary-80">
          Your subscription to <span className="font-medium">Netflix</span> has been successfully{' '}
          <span className="font-medium">active</span>
        </p>
        <p className="text-body-xs text-primary-35">10 Minutes ago</p>
      </div>
    </div>
  );
};

export default NotificationCard;
