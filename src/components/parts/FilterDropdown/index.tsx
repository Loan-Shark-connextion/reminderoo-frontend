import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const FilterDropdown = ({ name, data }: { name: string; data: string[] }) => {
  return (
    <div className="w-1/3 flex flex-col gap-2">
      <p className="text-body-sm font-medium text-primary-80 capitalize">{name}</p>
      <Select>
        <SelectTrigger className="bg-muted">
          <SelectValue placeholder={`All ${name}`} className="capitalize" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all" className="capitalize">
            All {name}
          </SelectItem>
          {data.map((field: string) => (
            <SelectItem key={field} value={field}>
              {field}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterDropdown;
