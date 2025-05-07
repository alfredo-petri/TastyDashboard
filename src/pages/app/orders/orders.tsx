import { ArrowRight, Search, X } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

export const Orders: React.FC = () => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
            </div>
            <div className="space-y-2.5">
                <form action="" className="flex items-center gap-2">
                    <span className="text-sm font-semibold">Filtros:</span>
                    <Input
                        placeholder="Nome do cliente"
                        className="h-8 w-[320px]"
                    />
                </form>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[64px]"></TableHead>
                                <TableHead className="w-[140px]">
                                    Identificador
                                </TableHead>
                                <TableHead className="w-[180px]">
                                    Realizado há
                                </TableHead>
                                <TableHead className="w-[140px]">
                                    Status
                                </TableHead>
                                <TableHead>Cliente</TableHead>
                                <TableHead className="w-[140px]">
                                    Total do pedido
                                </TableHead>
                                <TableHead className="w-[164px]"></TableHead>
                                <TableHead className="w-[132px]"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array.from({ length: 5 }).map((_, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell>
                                            <Button variant="outline" size="sm">
                                                <Search className="h-3 w-3" />
                                                <span className="sr-only">
                                                    detalhes do produto
                                                </span>
                                            </Button>
                                        </TableCell>
                                        <TableCell className="font-mono text-xs font-medium">
                                            lkjasjlk1j1029ue02knal
                                        </TableCell>
                                        <TableCell className="text-muted-foreground">
                                            há 15 min
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                                                <span className="text-muted-foreground font-medium">
                                                    Pendente
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            Alfredo Augusto Petri
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            R$ 39.90
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="outline" size="sm">
                                                <ArrowRight className="mr-2 h-3 w-3" />
                                                Aprovar
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="ghost" size="sm">
                                                <X className="mr-2 h-3 w-3" />
                                                Cancelar
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}
