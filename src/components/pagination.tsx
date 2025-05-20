import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
} from 'lucide-react'
import React from 'react'

import { Button } from './ui/button'

interface PaginationProps {
    pageIndex: number
    totalCount: number
    perPage: number
    onPageChange: (pageIndex: number) => Promise<void> | void
}

export const Pagination: React.FC<PaginationProps> = ({
    pageIndex,
    totalCount,
    perPage,
    onPageChange,
}) => {
    const pages = Math.ceil(totalCount / perPage)
    return (
        <div className="flex items-center justify-between">
            <span className="text-muted-foreground text-sm">
                Total de pedidos: {totalCount}
            </span>
            <div className="flex items-center gap-6 lg:gap-8">
                <div className="text-sm font-medium">
                    Pagina {pageIndex + 1} de {pages}
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => onPageChange(0)}
                        disabled={pageIndex <= 0}
                    >
                        <ChevronsLeft className="h-4 w-4" />
                        <span className="sr-only">Primeira página</span>
                    </Button>
                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => onPageChange(pageIndex - 1)}
                        disabled={pageIndex <= 0}
                    >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Página anterior</span>
                    </Button>
                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => onPageChange(pageIndex + 1)}
                        disabled={pageIndex >= pages - 1}
                    >
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Próxima página</span>
                    </Button>
                    <Button
                        variant="outline"
                        className="h-8 w-8 p-0"
                        onClick={() => onPageChange(pages - 1)}
                        disabled={pageIndex >= pages - 1}
                    >
                        <ChevronsRight className="h-4 w-4" />
                        <span className="sr-only">Ultima página</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
