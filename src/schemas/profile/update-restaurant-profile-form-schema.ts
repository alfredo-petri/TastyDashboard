import { z } from 'zod'

export const updateRestaurantProfileFormSchema = z.object({
    name: z.string().min(1),
    description: z.string(),
})

export type UpdateRestaurantProfileForm = z.infer<
    typeof updateRestaurantProfileFormSchema
>
