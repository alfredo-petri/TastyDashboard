import React from 'react'

import { OrderStatusType } from '@/types/order-status-status'

interface OrderStatusProps {
    status: OrderStatusType
}
const orderStatusMap: Record<OrderStatusType, string> = {
    processing: 'Em preparo',
    pending: 'Pendente',
    canceled: 'Cancelado',
    delivered: 'Entregue',
    delivering: 'A caminho',
    all: 'Todos status',
}

export const OrderStatus: React.FC<OrderStatusProps> = ({ status }) => {
    return (
        <div className="flex items-center gap-2">
            {status === 'pending' && (
                <span
                    data-testid="badge"
                    className="h-2 w-2 rounded-full bg-slate-400"
                ></span>
            )}
            {status === 'canceled' && (
                <span
                    data-testid="badge"
                    className="h-2 w-2 rounded-full bg-rose-500"
                ></span>
            )}
            {['processing', 'delivering'].includes(status) && (
                <span
                    data-testid="badge"
                    className="h-2 w-2 rounded-full bg-amber-500"
                ></span>
            )}
            {status === 'delivered' && (
                <span
                    data-testid="badge"
                    className="h-2 w-2 rounded-full bg-emerald-500"
                ></span>
            )}
            <span className="text-muted-foreground font-medium">
                {orderStatusMap[status]}
            </span>
        </div>
    )
}
