import { api } from '@/lib/axios'

interface UpdateRestaurantProfileBody {
    name: string
    description: string | null
}

export const updateRestauranteProfile = async ({
    name,
    description,
}: UpdateRestaurantProfileBody) => {
    await api.put('/profile', { name, description })
}
