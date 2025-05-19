import { z } from 'zod'

export const updateRestaurantProfileFormSchema = z.object({
    name: z.string().min(1),
    description: z.string().nullable(),
})

export type UpdateRestaurantProfileFormSchema = z.infer<
    typeof updateRestaurantProfileFormSchema
>
