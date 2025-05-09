import { Utensils } from 'lucide-react'
import React from 'react'

import { DashboardCard } from './dashboard-card'
import { RevenueChart } from './revenue-chart'

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <div className="grid grid-cols-4 gap-4">
                <DashboardCard
                    cardValue="R$ 1248,60"
                    resultPercentage={2}
                    cardType="revenue"
                />
                <DashboardCard
                    cardValue="246"
                    Icon={Utensils}
                    resultPercentage={10}
                    cardType="ordersMonth"
                />
                <DashboardCard
                    cardValue="12"
                    Icon={Utensils}
                    result="negative"
                    resultPercentage={3}
                    cardType="ordersDay"
                />
                <DashboardCard
                    cardValue="32"
                    resultPercentage={5}
                    cardType="cancellations"
                    Icon={Utensils}
                />
            </div>
            <div className="grid grid-cols-9 gap-4">
                <RevenueChart />
            </div>
        </div>
    )
}
