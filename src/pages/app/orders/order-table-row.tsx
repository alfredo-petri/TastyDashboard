import { ArrowRight, Search, X } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

interface OrderTableRowProps {}

export const OrderTableRow: React.FC<OrderTableRowProps> = () => {
    return (
        <TableRow>
            <TableCell>
                <Button variant="outline" size="sm">
                    <Search className="h-3 w-3" />
                    <span className="sr-only">detalhes do produto</span>
                </Button>
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">
                lkjasjlk1j1029ue02knal
            </TableCell>
            <TableCell className="text-muted-foreground">há 15 min</TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                    <span className="text-muted-foreground font-medium">
                        Pendente
                    </span>
                </div>
            </TableCell>
            <TableCell className="font-medium">Alfredo Augusto Petri</TableCell>
            <TableCell className="font-medium">R$ 39.90</TableCell>
            <TableCell>
                <Button variant="outline" size="sm">
                    <ArrowRight className="h-3 w-3" />
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button variant="ghost" size="sm">
                    <X className="h-3 w-3" />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
    )
}
