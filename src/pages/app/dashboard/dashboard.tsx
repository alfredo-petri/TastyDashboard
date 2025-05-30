import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'
import React from 'react'

import { getDayOrdersAmount } from '@/api/get-day-orders-amount'
import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-orders-amount'
import { getMonthOrdersAmount } from '@/api/get-month-orders-amount'
import { getMonthRevenue } from '@/api/get-month-revenue'

import { DashboardCard } from './dashboard-card'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
    const { data: dayOrdersAmount } = useQuery({
        queryKey: ['metrics', 'day-orders-amount'],
        queryFn: getDayOrdersAmount,
    })
    const { data: monthOrdersAmount } = useQuery({
        queryKey: ['metrics', 'month-orders-amount'],
        queryFn: getMonthOrdersAmount,
    })
    const { data: monthCanceledOrdersAmount } = useQuery({
        queryKey: ['metrics', 'month-canceled-orders-amount'],
        queryFn: getMonthCanceledOrdersAmount,
    })
    const { data: monthRevenue } = useQuery({
        queryKey: ['metrics', 'month-revenue'],
        queryFn: getMonthRevenue,
    })

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <div className="grid grid-cols-4 gap-4">
                <DashboardCard
                    cardValue={
                        monthRevenue &&
                        (monthRevenue.receipt / 100).toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })
                    }
                    resultPercentage={2}
                    cardType="revenue"
                />
                <DashboardCard
                    cardValue={monthOrdersAmount?.amount.toLocaleString(
                        'pt-BR',
                    )}
                    Icon={Utensils}
                    resultPercentage={monthOrdersAmount?.diffFromLastMonth}
                    cardType="ordersMonth"
                />
                <DashboardCard
                    cardValue={dayOrdersAmount?.amount.toLocaleString('pt-BR')}
                    Icon={Utensils}
                    resultPercentage={dayOrdersAmount?.diffFromYesterday}
                    cardType="ordersDay"
                />
                <DashboardCard
                    cardValue={monthCanceledOrdersAmount?.amount.toLocaleString(
                        'pt-BR',
                    )}
                    resultPercentage={
                        monthCanceledOrdersAmount?.diffFromLastMonth
                    }
                    cardType="cancellations"
                    Icon={Utensils}
                />
            </div>
            <div className="grid grid-cols-9 gap-4">
                <RevenueChart />
                <PopularProductsChart />
            </div>
        </div>
    )
}
