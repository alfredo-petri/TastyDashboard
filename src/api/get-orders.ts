import { api } from '@/lib/axios'
import { OrderStatusType } from '@/types/order-status-status'

export interface GetOrdersQuery {
    pageIndex?: number | null
    orderId?: string | null
    customerName?: string | null
    status?: string | null
}

export interface GetOrdersResponse {
    orders: {
        orderId: string
        createdAt: string
        status: OrderStatusType
        customerName: string
        total: number
    }[]
    meta: {
        pageIndex: number
        perPage: number
        totalCount: number
    }
}

export const getOrders = async ({
    pageIndex,
    orderId,
    customerName,
    status,
}: GetOrdersQuery) => {
    const response = await api.get<GetOrdersResponse>('orders', {
        params: {
            pageIndex,
            orderId,
            customerName,
            status,
        },
    })
    return response.data
}
