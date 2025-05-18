import { z } from 'zod'

export const updateRestaurantProfileFormSchema = z.object({
    name: z.string().min(1),
    description: z.string(),
})

export type UpdateRestaurantProfileFormSchema = z.infer<
    typeof updateRestaurantProfileFormSchema
>
