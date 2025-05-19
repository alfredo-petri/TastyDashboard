import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import {
    getManagedRestaurant,
    GetManagedRestaurantResponse,
} from '@/api/get-managed-restaurant'
import { updateRestauranteProfile } from '@/api/update-restaurant-profile'
import {
    UpdateRestaurantProfileFormSchema,
    updateRestaurantProfileFormSchema,
} from '@/schemas/profile/update-restaurant-profile-form-schema'

import { Button } from './ui/button'
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

interface StoreProfileDialogProps {}

export const StoreProfileDialog: React.FC<StoreProfileDialogProps> = () => {
    const queryClient = useQueryClient()

    const { data: managedRestaurant } = useQuery({
        queryKey: ['managed-restaurant'],
        queryFn: getManagedRestaurant,
        staleTime: Infinity,
    })

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<UpdateRestaurantProfileFormSchema>({
        resolver: zodResolver(updateRestaurantProfileFormSchema),
        values: {
            name: managedRestaurant?.name || '',
            description: managedRestaurant?.description || '',
        },
    })

    const updateManagedRestaurantCache = ({
        name,
        description,
    }: UpdateRestaurantProfileFormSchema) => {
        const cached = queryClient.getQueryData<GetManagedRestaurantResponse>([
            'managed-restaurant',
        ])
        if (cached) {
            queryClient.setQueryData<GetManagedRestaurantResponse>(
                ['managed-restaurant'],
                {
                    ...cached,
                    name,
                    description,
                },
            )
        }
        return { cached }
    }

    const { mutateAsync: updateRestaurantProfileFn } = useMutation({
        mutationFn: updateRestauranteProfile,
        onMutate({ name, description }) {
            const { cached } = updateManagedRestaurantCache({
                name,
                description,
            })
            return { previousRestaurantProfile: cached }
        },
        onError(_error, _variables, context) {
            if (context?.previousRestaurantProfile) {
                updateManagedRestaurantCache(context.previousRestaurantProfile)
            }
        },
    })

    const handleUpdateRestaurantProfile = async (
        data: UpdateRestaurantProfileFormSchema,
    ) => {
        const { name, description } = data
        try {
            await updateRestaurantProfileFn({ name, description })

            toast.success('Perfil atualizado com sucesso')
        } catch (error) {
            toast.error('Falha ao atualizar o perfil, tente novamente')
        }
    }

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Perfil do restaurante</DialogTitle>
                <DialogDescription>
                    Atualize as informações do seu estabelecimento
                </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(handleUpdateRestaurantProfile)}>
                <div className="space-y-4 py-4">
                    <div className="grid grid-cols-5 items-center">
                        <Label className="text-right" htmlFor="name">
                            Nome
                        </Label>
                        <Input
                            className="col-span-4"
                            id="name"
                            {...register('name')}
                        />
                    </div>
                    <div className="grid grid-cols-5 items-center">
                        <Label className="text-right" htmlFor="description">
                            Descrição
                        </Label>
                        <Textarea
                            className="col-span-4"
                            id="description"
                            {...register('description')}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="ghost" type="button">
                            Cancelar
                        </Button>
                    </DialogClose>
                    <Button
                        type="submit"
                        variant="success"
                        disabled={isSubmitting}
                    >
                        Salvar
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}
