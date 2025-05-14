import { api } from '@/lib/axios'

export interface registerRestaurant {
    restaurantName: string
    managerName: string
    email: string
    phone: string
}

export const registerRestaurant = async (body: registerRestaurant) => {
    const { restaurantName, managerName, email, phone } = body

    await api.post('restaurants', { restaurantName, managerName, email, phone })
}
