import React from 'react'

import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

import { OrderTableRowInfoItem } from './table/order-table-row-info-item'
import { OrderTableRowOrderItem } from './table/order-table-row-order-item'

interface OrderDetailsProps {}

export const OrderDetails: React.FC<OrderDetailsProps> = () => {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Pedido: 68das46as4d564</DialogTitle>
                <DialogDescription>Detalhes do pedido:</DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-muted-foreground">
                                Status
                            </TableCell>
                            <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                                    <span className="text-muted-foreground font-medium">
                                        Pendente
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <OrderTableRowInfoItem
                            field="Cliente"
                            value="Alfredo Augusto Petri"
                        />
                        <OrderTableRowInfoItem
                            field="Cliente"
                            value="Alfredo Augusto Petri"
                        />
                        <OrderTableRowInfoItem
                            field="Contato"
                            value="(41) 99651-6300"
                        />
                        <OrderTableRowInfoItem
                            field="Email"
                            value="alfredo@example.com"
                        />
                        <OrderTableRowInfoItem
                            field="Realizado há"
                            value="15 min"
                        />
                    </TableBody>
                </Table>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Produto</TableHead>
                            <TableHead className="w-[40px] text-center">
                                Qtd
                            </TableHead>
                            <TableHead className="w-[100px] text-center">
                                Preço
                            </TableHead>
                            <TableHead className="w-[100px] text-center">
                                SubTotal
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <OrderTableRowOrderItem
                            product="pizza big"
                            quantity={1}
                            price={55}
                        />
                        <OrderTableRowOrderItem
                            product="pizza grande"
                            quantity={2}
                            price={39.9}
                        />
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={3}>Total</TableCell>
                            <TableCell className="text-right font-medium">
                                R$ 134.8
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </DialogContent>
    )
}
