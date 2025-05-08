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
            <TableCell className="w-[100px] text-center">R$ {price}</TableCell>
            <TableCell className="w-[100px] text-center">
                R$ {quantity * price}
            </TableCell>
        </TableRow>
    )
}
