'use client';

import { useEffect, useState } from 'react';

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import { ChevronLeft, ChevronRight, Filter, Plus, Search, Trash2 } from 'lucide-react';
import Link from 'next/link';

import { NoSearchResult } from '@/assets/icons';
import FilterDropdown from '@/components/parts/FilterDropdown';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import {
  SUBSCRIPTION_CATEGORIES,
  SUBSCRIPTION_PRICE_RANGES,
  SUBSCRIPTION_STATUS
} from '@/lib/constants';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const SubscriptionTable = <TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) => {
  const [openFilters, setOpenFilters] = useState(false);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5
  });
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      pagination,
      rowSelection
    }
  });

  const handleOpenFilters = () => {
    setOpenFilters(!openFilters);
  };

  const handleFilterValue = (selectedValue: string, title: string) => {
    if (selectedValue === 'all') return table.getColumn(title)?.setFilterValue('');
    if (title === 'pricing') {
      const minMax = SUBSCRIPTION_PRICE_RANGES[selectedValue];
      return table.getColumn(title)?.setFilterValue(minMax);
    }
    return table.getColumn(title)?.setFilterValue(selectedValue);
  };

  useEffect(() => {
    // This is how to get the original datas
    console.log(rowSelection, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
    console.log(!!rowSelection, '<>>>>>>>>>>>>>>>>>>>>>>>>>>>');

    const selectedRows = table.getSelectedRowModel().rows; // There are rows, flat rows and rows by Id
    const originalDatas = selectedRows.map((row) => row.original);
    console.log(originalDatas, '<<<<<<<<<<<<<<<<<<');
  });

  return (
    <>
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex justify-between">
          <div className="flex gap-2 w-1/3">
            <Button size="icon" variant="secondary" onClick={handleOpenFilters} className="p-3">
              <Filter />
            </Button>

            <div className="relative flex justify-center items-center">
              <Input
                placeholder="Search..."
                value={(table.getColumn('appName')?.getFilterValue() as string) ?? ''}
                onChange={(event) => table.getColumn('appName')?.setFilterValue(event.target.value)}
                className="bg-muted border-none"
              />
              <div className="absolute text-primary-55 right-3 z-10">
                <Search className="w-4 h-4" />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            {!!Object.keys(rowSelection).length && (
              <Button variant="destructive" className="gap-2">
                <Trash2 />
                Delete Selection
              </Button>
            )}
            <Link href="/subscriptions">
              <Button variant="secondary">See all Subscriptions</Button>
            </Link>
            <Link href="/add">
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add Subscription
              </Button>
            </Link>
          </div>
        </div>

        {openFilters && (
          <div className="flex gap-4">
            <FilterDropdown
              filterFn={handleFilterValue}
              title="category"
              data={SUBSCRIPTION_CATEGORIES}
            />
            <FilterDropdown
              filterFn={handleFilterValue}
              title="status"
              data={SUBSCRIPTION_STATUS}
            />
            <FilterDropdown
              filterFn={handleFilterValue}
              title="pricing"
              data={SUBSCRIPTION_PRICE_RANGES}
            />
          </div>
        )}
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-primary-20">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center py-12">
                  <div className="flex flex-col justify-center items-center gap-2">
                    <NoSearchResult />
                    <p className="font-medium text-body-lg">No Result Found</p>
                    <p className="font-light text-body-md max-w-[14rem]">
                      Try adjusting your search to find what you are looking for
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between space-x-2 py-4">
        <div className="flex justify-center items-center gap-6">
          <p>Rows per page </p>
          <Input
            type="number"
            defaultValue={5}
            className="w-16 text-secondary-40"
            onChange={(e) => table.setPageSize(+e.target.value)}
          />
        </div>
        <div className="flex items-center justify-end gap-8">
          <p>{`Page ${pagination.pageIndex + 1} of ${table.getPageCount()}`}</p>
          <div className="flex items-center justify-end gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="bg-primary-0 border"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="bg-primary-0 border"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionTable;
