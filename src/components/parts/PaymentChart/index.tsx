'use client';

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

const PaymentChart = () => {
  const chartData = [
    { month: 'January', 2024: 145, 2023: 282 },
    { month: 'February', 2024: 312, 2023: 197 },
    { month: 'March', 2024: 158, 2023: 95 },
    { month: 'April', 2024: 92, 2023: 264 },
    { month: 'May', 2024: 218, 2023: 150 },
    { month: 'June', 2024: 270, 2023: 132 },
    { month: 'July', 2024: 199, 2023: 348 },
    { month: 'August', 2024: 256, 2023: 214 },
    { month: 'September', 2024: 137, 2023: 85 },
    { month: 'October', 2024: 188, 2023: 299 },
    { month: 'November', 2024: 212, 2023: 175 },
    { month: 'December', 2024: 245, 2023: 193 }
  ];

  const chartConfig = {
    2024: {
      label: 2024,
      color: '#4336f3'
    },
    2023: {
      label: 2023,
      color: '#ecebff'
    }
  } satisfies ChartConfig;

  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <AreaChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
        <defs>
          <linearGradient id="secondary-400-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-2024)" stopOpacity={0.8} />
            <stop offset="95%" stopColor="var(--color-2023)" stopOpacity={0.1} />
          </linearGradient>
          <linearGradient id="secondary-0-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--color-2023)" stopOpacity={0.2} />
            <stop offset="95%" stopColor="var(--color-2023)" stopOpacity={0.1} />
          </linearGradient>
        </defs>
        <ChartLegend content={<ChartLegendContent />} />

        <Area
          dataKey="2023"
          fill="url(#secondary-0-gradient)"
          strokeWidth={3}
          stroke="var(--color-2023)"
        />
        <Area
          dataKey="2024"
          fill="url(#secondary-400-gradient)"
          strokeWidth={3}
          stroke="var(--color-2024)"
        />
      </AreaChart>
    </ChartContainer>
  );
};
export default PaymentChart;
