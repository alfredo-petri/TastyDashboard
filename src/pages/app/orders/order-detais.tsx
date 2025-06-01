import { useQuery } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import React from 'react'

import { GetOrderDetails } from '@/api/get-order-details'
import { OrderStatus } from '@/components/order-status'
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

import { OrderDetailsSkeleton } from './order-details-skeleton'
import { OrderTableRowInfoItem } from './table/order-table-row-info-item'
import { OrderTableRowOrderItem } from './table/order-table-row-order-item'

interface OrderDetailsProps {
    orderId: string
    open: boolean
}

export const OrderDetails: React.FC<OrderDetailsProps> = ({
    orderId,
    open,
}) => {
    const { data: order } = useQuery({
        queryKey: ['order', orderId],
        queryFn: () => GetOrderDetails({ orderId }),
        enabled: open,
    })

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: {orderId}</DialogTitle>
                <DialogDescription>Detalhes do pedido:</DialogDescription>
            </DialogHeader>
            {order ? (
                <div className="space-y-6">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="text-muted-foreground">
                                    Status
                                </TableCell>
                                <OrderStatus status={order.status} />
                            </TableRow>
                            <OrderTableRowInfoItem
                                field="Cliente"
                                value={order.customer.name}
                            />
                            <OrderTableRowInfoItem
                                field="Contato"
                                value={order.customer.phone ?? 'Não informado'}
                            />
                            <OrderTableRowInfoItem
                                field="Email"
                                value={order.customer.email}
                            />
                            <OrderTableRowInfoItem
                                field="Realizado há"
                                value={formatDistanceToNow(order.createdAt, {
                                    locale: ptBR,
                                })}
                            />
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
                            {order.orderItems.map((orderItem) => (
                                <OrderTableRowOrderItem
                                    key={orderItem.id}
                                    product={orderItem.product.name}
                                    quantity={orderItem.quantity}
                                    price={orderItem.priceInCents}
                                />
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={3}>Total</TableCell>
                                <TableCell className="text-right font-medium">
                                    {(order.totalInCents / 100).toLocaleString(
                                        'pt-BR',
                                        {
                                            style: 'currency',
                                            currency: 'BRL',
                                        },
                                    )}
                                </TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            ) : (
                <OrderDetailsSkeleton />
            )}
        </DialogContent>
    )
}
