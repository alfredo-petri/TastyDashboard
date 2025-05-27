import { useMutation, useQueryClient } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'
import React, { useState } from 'react'

import { approveOrder } from '@/api/approve-order'
import { cancelOrder } from '@/api/cancel-order'
import { deliverOrder } from '@/api/deliver-order'
import { dispatchOrder } from '@/api/dispatch-order'
import { GetOrdersResponse } from '@/api/get-orders'
import { OrderStatus } from '@/components/order-status'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { OrderStatusType } from '@/types/order-status-status'

import { OrderDetails } from '../order-detais'

interface OrderTableRowProps {
    order: {
        orderId: string
        createdAt: string
        status: OrderStatusType
        customerName: string
        total: number
    }
}

export const OrderTableRow: React.FC<OrderTableRowProps> = ({ order }) => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false)
    const queryClient = useQueryClient()

    const updateOrderStatusOnCache = (
        orderId: string,
        status: OrderStatusType,
    ) => {
        const ordersListCache = queryClient.getQueriesData<GetOrdersResponse>({
            queryKey: ['orders'],
        })

        ordersListCache.forEach(([cacheKey, cacheData]) => {
            if (!cacheData) return

            queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
                ...cacheData,
                orders: cacheData.orders.map((order) => {
                    if (order.orderId === orderId) return { ...order, status }
                    return order
                }),
            })
        })
    }

    const { mutateAsync: cancelOrderFn, isPending: isCancelingOrder } =
        useMutation({
            mutationFn: cancelOrder,
            async onSuccess(_data, { orderId }) {
                updateOrderStatusOnCache(orderId, 'canceled')
            },
        })
    const { mutateAsync: approveOrderFn, isPending: isAppovingOrder } =
        useMutation({
            mutationFn: approveOrder,
            async onSuccess(_data, { orderId }) {
                updateOrderStatusOnCache(orderId, 'processing')
            },
        })
    const { mutateAsync: dispatchOrderFn, isPending: isDispatchingOrder } =
        useMutation({
            mutationFn: dispatchOrder,
            async onSuccess(_data, { orderId }) {
                updateOrderStatusOnCache(orderId, 'delivering')
            },
        })
    const { mutateAsync: deliverOrderFn, isPending: isDeliveringOrder } =
        useMutation({
            mutationFn: deliverOrder,
            async onSuccess(_data, { orderId }) {
                updateOrderStatusOnCache(orderId, 'delivered')
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
                {order.status === 'pending' && (
                    <Button
                        onClick={() =>
                            approveOrderFn({ orderId: order.orderId })
                        }
                        disabled={isAppovingOrder}
                        variant="outline"
                        size="sm"
                    >
                        <ArrowRight className="h-3 w-3" />
                        Aprovar
                    </Button>
                )}
                {order.status === 'processing' && (
                    <Button
                        onClick={() =>
                            dispatchOrderFn({ orderId: order.orderId })
                        }
                        disabled={isDispatchingOrder}
                        variant="outline"
                        size="sm"
                    >
                        <ArrowRight className="h-3 w-3" />
                        Enviar
                    </Button>
                )}
                {order.status === 'delivering' && (
                    <Button
                        onClick={() =>
                            deliverOrderFn({ orderId: order.orderId })
                        }
                        disabled={isDeliveringOrder}
                        variant="outline"
                        size="sm"
                    >
                        <ArrowRight className="h-3 w-3" />
                        Entregar
                    </Button>
                )}
            </TableCell>
            <TableCell>
                <Button
                    onClick={() => cancelOrderFn({ orderId: order.orderId })}
                    disabled={
                        !['pending', 'processing'].includes(order.status) ||
                        isCancelingOrder
                    }
                    variant="ghost"
                    size="sm"
                >
                    <X className="h-3 w-3" />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}
