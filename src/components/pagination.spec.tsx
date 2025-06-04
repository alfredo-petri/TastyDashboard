import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Pagination } from './pagination'

describe('Pagination', () => {
    it('should display the right amount of pages and results', () => {
        const wrapper = render(
            <Pagination
                pageIndex={0}
                totalCount={205}
                perPage={10}
                onPageChange={() => {}}
            />,
        )

        expect(wrapper.getByText('Pagina 1 de 21')).toBeInTheDocument()
        expect(wrapper.getByText('Total de pedidos: 205')).toBeInTheDocument()
    })
})
