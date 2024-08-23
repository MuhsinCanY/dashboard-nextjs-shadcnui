'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
import { data } from '@/data/analitics'

export const AnaliticsChart = () => {
  const chartConfig = {
    uv: {
      label: 'Views UV',
      color: '#2563eb',
    },
    amt: {
      label: 'Views AMT',
      color: '#60a5fa',
    },
  } satisfies ChartConfig

  return (
    <ChartContainer
      config={chartConfig}
      className="max-h-[350px] min-h-[200px] w-full"
    >
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis tickLine={false} tickMargin={10} axisLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="uv" fill="var(--color-uv)" radius={4} />
        <Bar dataKey="amt" fill="var(--color-amt)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
