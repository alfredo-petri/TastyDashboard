import React from 'react'

import { Skeleton } from '@/components/ui/skeleton'
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

import { OrderTableRowInfoItem } from './table/order-table-row-info-item'
import { OrderTableRowOrderItem } from './table/order-table-row-order-item'

export const OrderDetailsSkeleton: React.FC = () => {
    return (
        <div className="space-y-6">
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Status</TableCell>
                        <Skeleton className="h-5 w-20" />
                    </TableRow>
                    <OrderTableRowInfoItem field="Cliente" value={null} />
                    <OrderTableRowInfoItem field="Contato" value={null} />
                    <OrderTableRowInfoItem field="Email" value={null} />
                    <OrderTableRowInfoItem field="Realizado há" value={null} />
                </TableBody>
            </Table>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Produto</TableHead>
                        <TableHead className="w-[40px] text-center">
                            Qtd
                        </TableHead>
                        <TableHead className="w-[100px] text-center">
                            Preço
                        </TableHead>
                        <TableHead className="w-[100px] text-center">
                            SubTotal
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Array.from({ length: 2 }).map((_item, index) => (
                        <OrderTableRowOrderItem key={index} />
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right font-medium">
                            <Skeleton className="h-5 w-20" />
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
