import { BarChart } from 'lucide-react'
import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface PopularProductsChartProps {}

const chartData = [
    { product: 'calabresa', amount: 120 },
    { product: 'mussarela', amount: 100 },
    { product: 'frango', amount: 150 },
    { product: 'texana', amount: 85 },
    { product: 'portuguesa', amount: 120 },
]

const COLORS = [
    colors.sky[500],
    colors.amber[500],
    colors.violet[500],
    colors.emerald[500],
    colors.rose[500],
]

export const PopularProductsChart: React.FC<PopularProductsChartProps> = () => {
    return (
        <Card className="col-span-3">
            <CardHeader className="pb-8">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium">
                        Produtos populares
                    </CardTitle>
                    <BarChart className="text-muted-foreground h-4 w-4" />
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={240}>
                    <PieChart style={{ fontSize: 12 }}>
                        <Pie
                            data={chartData}
                            dataKey="amount"
                            nameKey="product"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            innerRadius={60}
                            strokeWidth={8}
                            labelLine={false}
                            label={({
                                cx,
                                cy,
                                midAngle,
                                innerRadius,
                                outerRadius,
                                value,
                                index,
                            }) => {
                                const RADIAN = Math.PI / 180
                                const radius =
                                    12 +
                                    innerRadius +
                                    (outerRadius - innerRadius)
                                const x =
                                    cx + radius * Math.cos(-midAngle * RADIAN)
                                const y =
                                    cy + radius * Math.sin(-midAngle * RADIAN)

                                return (
                                    <text
                                        x={x}
                                        y={y}
                                        className="fill-muted-foreground text-xs"
                                        textAnchor={x > cx ? 'start' : 'end'}
                                        dominantBaseline="central"
                                    >
                                        {chartData[index].product.length > 12
                                            ? chartData[index].product
                                                  .substring(0, 12)
                                                  .concat('...')
                                            : chartData[index].product}{' '}
                                        ({value})
                                    </text>
                                )
                            }}
                        >
                            {chartData.map((_, index) => {
                                return (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index]}
                                        className="stroke-background hover:opacity-80 dark:stroke-zinc-900"
                                    />
                                )
                            })}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    )
}
