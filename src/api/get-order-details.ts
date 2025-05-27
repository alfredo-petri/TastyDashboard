import { api } from '@/lib/axios'
import { OrderStatusType } from '@/types/order-status-status'

export interface GetOrderDetailsParams {
    orderId: string
}

export interface GetOrderDetailsResponse {
    id: string
    status: OrderStatusType
    createdAt: string
    totalInCents: number
    customer: {
        name: string
        email: string
        phone: string | null
    }
    orderItems: {
        id: string
        product: { name: string }
        priceInCents: number
        quantity: number
    }[]
}

export const GetOrderDetails = async ({ orderId }: GetOrderDetailsParams) => {
    const response = await api.get<GetOrderDetailsResponse>(
        `/orders/${orderId}`,
    )
    return response.data
}
