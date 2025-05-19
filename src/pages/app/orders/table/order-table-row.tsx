import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'
import React from 'react'

import { OrderStatus } from '@/components/order-status'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDetails } from '../order-detais'

interface OrderTableRowProps {
    order: {
        orderId: string
        createdAt: string
        status:
            | 'pending'
            | 'canceled'
            | 'processing'
            | 'delivering'
            | 'delivered'
        customerName: string
        total: number
    }
}

export const OrderTableRow: React.FC<OrderTableRowProps> = ({ order }) => {
    return (
        <TableRow>
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                            <Search className="h-3 w-3" />
                            <span className="sr-only">detalhes do produto</span>
                        </Button>
                    </DialogTrigger>
                    <OrderDetails />
                </Dialog>
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">
                {order.orderId}
            </TableCell>
            <TableCell className="text-muted-foreground">
                {formatDistanceToNow(order.createdAt, {
                    locale: ptBR,
                    addSuffix: true,
                })}
            </TableCell>
            <TableCell>
                <OrderStatus status={order.status} />
            </TableCell>
            <TableCell className="font-medium">{order.customerName}</TableCell>
            <TableCell className="font-medium">
                {order.total.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                })}
            </TableCell>
            <TableCell>
                <Button variant="outline" size="sm">
                    <ArrowRight className="h-3 w-3" />
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button variant="ghost" size="sm">
                    <X className="h-3 w-3" />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}
