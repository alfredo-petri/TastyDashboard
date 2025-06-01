import React from 'react'

import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

interface OrderTableRowInfoItemProps {
    field: string
    value: string | null
}

export const OrderTableRowInfoItem: React.FC<OrderTableRowInfoItemProps> = ({
    field,
    value,
}) => {
    return (
        <TableRow>
            <TableCell className="text-muted-foreground">{field}</TableCell>
            {value ? (
                <TableCell className="flex justify-end">{value}</TableCell>
            ) : (
                <Skeleton className="mt-2 ml-auto h-5 w-40" />
            )}
        </TableRow>
    )
}
