import React from 'react'

import { Skeleton } from '@/components/ui/skeleton'
import { TableCell, TableRow } from '@/components/ui/table'

interface OrderTableRowOrderItemProps {
    product?: string
    quantity?: number
    price?: number
}

export const OrderTableRowOrderItem: React.FC<OrderTableRowOrderItemProps> = ({
    price,
    quantity,
    product,
}) => {
    return (
        <TableRow>
            <TableCell className="">
                {product || <Skeleton className="h-5 w-[140]" />}
            </TableCell>
            <TableCell className="w-[40px] text-center">
                {quantity || <Skeleton className="ml-auto h-5 w-3" />}
            </TableCell>
            <TableCell className="w-[100px] text-center">
                {price ? (
                    (price / 100).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    })
                ) : (
                    <Skeleton className="ml-auto h-5 w-12" />
                )}
            </TableCell>
            <TableCell className="w-[100px] text-center">
                {quantity ? (
                    price &&
                    ((quantity * price) / 100).toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    })
                ) : (
                    <Skeleton className="ml-auto h-5 w-20" />
                )}
            </TableCell>
        </TableRow>
    )
}
