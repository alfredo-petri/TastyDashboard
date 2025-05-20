import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'react-router'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import {
    OrderTableFiltersSchema,
    orderTableFiltersSchema,
} from '@/schemas/order-table/order-table-filter-schema'

interface OrderTableFiltersProps {}

export const OrderTableFilters: React.FC<OrderTableFiltersProps> = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const orderId = searchParams.get('orderId')
    const customerName = searchParams.get('customerName')
    const status = searchParams.get('status')

    const { register, handleSubmit, control, reset } =
        useForm<OrderTableFiltersSchema>({
            resolver: zodResolver(orderTableFiltersSchema),
            defaultValues: {
                orderId: orderId ?? '',
                customerName: customerName ?? '',
                status: status ?? 'all',
            },
        })

    const handleFilter = ({
        orderId,
        customerName,
        status,
    }: OrderTableFiltersSchema) => {
        setSearchParams((urlStates) => {
            if (orderId) {
                urlStates.set('orderId', orderId)
            } else {
                urlStates.delete('orderId')
            }
            if (customerName) {
                urlStates.set('customerName', customerName)
            } else {
                urlStates.delete('customerName')
            }
            if (status) {
                urlStates.set('status', status)
            } else {
                urlStates.delete('status')
            }

            urlStates.set('page', '1')

            return urlStates
        })
    }

    const handleClearFilters = () => {
        setSearchParams((urlStates) => {
            urlStates.delete('orderId')
            urlStates.delete('customerName')
            urlStates.delete('status')
            urlStates.set('page', '1')

            return urlStates
        })

        reset({
            orderId: '',
            customerName: '',
            status: 'all',
        })
    }

    return (
        <form
            onSubmit={handleSubmit(handleFilter)}
            className="flex items-center gap-2"
        >
            <span className="text-sm font-semibold">Filtros:</span>
            <Input
                placeholder="Id do pedido"
                className="h-9 w-auto"
                {...register('orderId')}
            />
            <Input
                placeholder="Nome do cliente"
                className="h-9 w-[320px]"
                {...register('customerName')}
            />
            <Controller
                name="status"
                control={control}
                render={({ field: { name, onChange, value, disabled } }) => {
                    return (
                        <Select
                            defaultValue="all"
                            name={name}
                            value={value}
                            disabled={disabled}
                            onValueChange={onChange}
                        >
                            <SelectTrigger className="h-8 w-[180px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">
                                    Todos status
                                </SelectItem>
                                <SelectItem value="pending">
                                    Pendente
                                </SelectItem>
                                <SelectItem value="canceled">
                                    Cancelado
                                </SelectItem>
                                <SelectItem value="processing">
                                    Em preparo
                                </SelectItem>
                                <SelectItem value="delivering">
                                    A caminho
                                </SelectItem>
                                <SelectItem value="delivered">
                                    Entregue
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    )
                }}
            />
            <Button type="submit" variant="secondary" size="sm" className="h-9">
                <Search className="h-4 w-4" />
                Filtrar resultados
            </Button>
            <Button
                type="button"
                onClick={handleClearFilters}
                variant="outline"
                size="sm"
                className="h-9"
            >
                <X className="h-4 w-4" />
                Remover filtros
            </Button>
        </form>
    )
}
