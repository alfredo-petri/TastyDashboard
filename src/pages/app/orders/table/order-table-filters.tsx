import { Search, X } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface OrderTableFiltersProps {}

export const OrderTableFilters: React.FC<OrderTableFiltersProps> = () => {
    return (
        <form action="" className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros:</span>
            <Input placeholder="Id do pedido" className="h-9 w-auto" />
            <Input placeholder="Nome do cliente" className="h-9 w-[320px]" />
            <Select defaultValue="all">
                <SelectTrigger className="h-8 w-[180px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">Todos status</SelectItem>
                    <SelectItem value="pending">Pendente</SelectItem>
                    <SelectItem value="canceled">Cancelado</SelectItem>
                    <SelectItem value="processing">Em preparo</SelectItem>
                    <SelectItem value="delivering">Em entrega</SelectItem>
                    <SelectItem value="delivered">Entregue</SelectItem>
                </SelectContent>
            </Select>
            <Button type="submit" variant="secondary" size="sm" className="h-9">
                <Search className="h-4 w-4" />
                Filtrar resultados
            </Button>
            <Button type="button" variant="outline" size="sm" className="h-9">
                <X className="h-4 w-4" />
                Remover filtros
            </Button>
        </form>
    )
}
