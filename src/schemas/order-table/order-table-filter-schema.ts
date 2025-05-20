import { z } from 'zod'

export const orderTableFiltersSchema = z.object({
    orderId: z.string().optional(),
    customerName: z.string().optional(),
    status: z.string().optional(),
})

export type OrderTableFiltersSchema = z.infer<typeof orderTableFiltersSchema>
