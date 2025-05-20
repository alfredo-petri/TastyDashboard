import React from 'react'

import { TableCell, TableRow } from '@/components/ui/table'

interface OrderTableRowOrderItemProps {
    product: string
    quantity: number
    price: number
}

export const OrderTableRowOrderItem: React.FC<OrderTableRowOrderItemProps> = ({
    price,
    quantity,
    product,
}) => {
    return (
        <TableRow>
            <TableCell className="">{product}</TableCell>
            <TableCell className="w-[40px] text-center">{quantity}</TableCell>
            <TableCell className="w-[100px] text-center">
                {(price / 100).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })}
            </TableCell>
            <TableCell className="w-[100px] text-center">
                {((quantity * price) / 100).toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                })}
            </TableCell>
        </TableRow>
    )
}
