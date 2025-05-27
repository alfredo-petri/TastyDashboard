import { useMutation, useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'
import React, { useState } from 'react'

import { cancelOrder } from '@/api/cancel-order'
import { GetOrdersResponse } from '@/api/get-orders'
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
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)
    const queryClient = useQueryClient()

    const { mutateAsync: cancelOrderFn } = useMutation({
        mutationFn: cancelOrder,
        async onSuccess(_data, { orderId }) {
            const ordersListCache =
                queryClient.getQueriesData<GetOrdersResponse>({
                    queryKey: ['orders'],
                })

            ordersListCache.forEach(([cacheKey, cacheData]) => {
                if (!cacheData) return

                queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
                    ...cacheData,
                    orders: cacheData.orders.map((order) => {
                        if (order.orderId === orderId)
                            return { ...order, status: 'canceled' }
                        return order
                    }),
                })
            })
        },
    })

    return (
        <TableRow>
            <TableCell>
                <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                            <Search className="h-3 w-3" />
                            <span className="sr-only">detalhes do produto</span>
                        </Button>
                    </DialogTrigger>
                    <OrderDetails
                        open={isDetailsOpen}
                        orderId={order.orderId}
                    />
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
                {(order.total / 100).toLocaleString('pt-br', {
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
                <Button
                    onClick={() => cancelOrderFn({ orderId: order.orderId })}
                    variant="ghost"
                    size="sm"
                    disabled={!['pending', 'processing'].includes(order.status)}
                >
                    <X className="h-3 w-3" />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}
