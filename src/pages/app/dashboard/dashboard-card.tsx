import { DollarSign } from 'lucide-react'
import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const cardMessages = {
    ordersDay: {
        title: 'Pedidos (dia)',
        description: 'em relação ao dia anterior',
    },
    ordersMonth: {
        title: 'Pedidos (mês)',
        description: 'em relação ao mês anterior',
    },
    revenue: {
        title: 'Receita total (mês)',
        description: 'em relação ao mês anterior',
    },
    cancellations: {
        title: 'Pedidos cancelados (mês)',
        description: 'em relação ao mês anterior',
    },
}

interface DashboardCardProps {
    cardType: 'ordersDay' | 'ordersMonth' | 'revenue' | 'cancellations'
    cardValue: string | undefined
    Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    resultPercentage?: number
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
    cardValue,
    Icon = DollarSign,
    resultPercentage = 0,
    cardType,
}) => {
    const { title, description } = cardMessages[cardType]

    const result = resultPercentage >= 0 ? 'positive' : 'negative'

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle className="text-base font-semibold">
                    {title}
                </CardTitle>
                <Icon className="text-muted-foreground h-4 w-4" />
            </CardHeader>
            <CardContent className="flex items-end justify-between space-x-2">
                {cardValue ? (
                    <>
                        <span className="mt-[-10px] text-2xl font-bold tracking-tight">
                            {cardValue}
                        </span>
                        <p className="text-muted-foreground text-sm">
                            <span
                                className={
                                    result === 'positive' &&
                                    cardType !== 'cancellations'
                                        ? 'text-emerald-500 dark:text-emerald-400'
                                        : cardType === 'cancellations' &&
                                            result === 'negative'
                                          ? 'text-emerald-500 dark:text-emerald-400'
                                          : 'text-rose-500 dark:text-rose-400'
                                }
                            >
                                {result === 'positive' ? '+' : ''}
                                {resultPercentage}%
                            </span>{' '}
                            {description}
                        </p>
                    </>
                ) : null}
            </CardContent>
        </Card>
    )
}
