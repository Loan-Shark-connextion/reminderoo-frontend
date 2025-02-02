'use client';

import { cloneElement, ReactElement, useState } from 'react';

import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { formatIDR } from '@/lib/utils';

import PercentBadge from './percentBadge';

// will probably need prop for the date range select
export interface ChartInfoProps {
  children: ReactElement;
  transactionYears: number[];
  total: 'spendings' | 'cost';
}

const ChartInfo = ({ children, transactionYears, total }: ChartInfoProps) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedYearTotal, setSelectedYearTotal] = useState(0);
  const [prevYearTotal, setPrevYearTotal] = useState(0);
  const [totalSubs, setTotalSubs] = useState(0);
  const [costTimeframe, setCostTimeframe] = useState('month');

  const handleSelectedYear = (year: string) => {
    setSelectedYear(+year);
  };

  const handleSelectedYearTotal = (total: number) => {
    setSelectedYearTotal(total);
  };

  const handlePrevYearTotal = (total: number) => {
    setPrevYearTotal(total);
  };

  const handleTotalSubs = (total: number) => {
    setTotalSubs(total);
  };

  const handleCostTimeframe = (timeframe: string) => {
    setCostTimeframe(timeframe);
  };

  return (
    <Card className="bg-primary-0 p-3 md:p-5 mt-4">
      <div className="flex justify-between mb-4 items-center">
        <div className="flex flex-col gap-2">
          <p className="font-medium text-primary-80 text-body-xs md:text-body-lg">Time Frame</p>
          {total === 'spendings' ? (
            <Select value={selectedYear.toString()} onValueChange={handleSelectedYear}>
              <SelectTrigger className="max-sm:max-w-[5.35rem] max-sm:max-h-7 max-sm:text-[0.65rem]">
                <SelectValue placeholder="This year" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {transactionYears.map((year) => (
                    // eslint-disable-next-line react/jsx-indent
                    <SelectItem key={year} value={year.toString()}>
                      {`${year - 1}-${year}`}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : (
            <Select value={costTimeframe} onValueChange={handleCostTimeframe}>
              <SelectTrigger className="max-sm:max-w-[6.35rem] max-sm:max-h-7 max-sm:text-[0.65rem]">
                <SelectValue placeholder="This year" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="month">This month</SelectItem>
                  <SelectItem value="year">This year</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        </div>

        {total === 'spendings' ? (
          <div className="flex items-start gap-3 md:gap-7">
            <div>
              <p className="font-medium text-primary-50 text-[0.5rem] md:text-body-sm">Spent Last Year</p>
              <h4 className="font-semibold text-body-sm md:text-heading-4">{formatIDR(+prevYearTotal)}</h4>
            </div>
            <div>
              <p className="font-medium text-primary-50 text-[0.5rem] md:text-body-sm">Spent This Year</p>
              <div className="flex justify-center items-center gap-2">
                <h4 className="font-semibold text-body-sm md:text-heading-4">{formatIDR(+selectedYearTotal)}</h4>

                {/* <Badge
                  variant="active"
                  className="text-[0.25rem] h-2.5 border border-success-foreground 
                  md:h-5 sm:text-[0.5rem] max-sm:px-0.5"
                >
                  <TrendingUp className="w-1.5 h-1.5 md:w-3 md:h-3" /> {calculatePercent()}
                </Badge> */}
                {/* {calculatePercent()} */}
                <PercentBadge selectedYearTotal={selectedYearTotal} prevYearTotal={prevYearTotal} />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-end">
            <div>
              <p className="font-medium text-primary-50 text-body-xs md:text-body-sm">Total Subscriptions</p>
              <h4 className="font-semibold text-heading-6 md:text-heading-4">{totalSubs}</h4>
            </div>
          </div>
        )}
      </div>

      <Separator className="my-4" />

      {cloneElement(children, {
        selectedYear: selectedYear,
        selectedYearTotalHandler: handleSelectedYearTotal,
        prevYearTotalHandler: handlePrevYearTotal,
        totalSubsHandler: handleTotalSubs,
        costTimeframe: costTimeframe
      })}
    </Card>
  );
};

export default ChartInfo;
