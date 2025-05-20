import React from 'react'

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
            <TableCell className="flex justify-end">{value}</TableCell>
        </TableRow>
    )
}
