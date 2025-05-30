import React from 'react'

import { Skeleton } from '@/components/ui/skeleton'

export const MetricCardSkeleton: React.FC = () => {
    return (
        <>
            <Skeleton className="mt-1 h-7 w-36" />
            <Skeleton className="h-4 w-56" />
        </>
    )
}
