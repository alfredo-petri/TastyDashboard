import { beforeEach } from 'node:test'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Pagination } from './pagination'

const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
    beforeEach(() => {
        onPageChangeCallback.mockClear()
    })

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
    it('should be able to navigate to the next page', async () => {
        const wrapper = render(
            <Pagination
                pageIndex={0}
                totalCount={205}
                perPage={10}
                onPageChange={onPageChangeCallback}
            />,
        )

        const nextPageButton = wrapper.getByRole('button', {
            name: 'Próxima página',
        })

        const user = userEvent.setup()

        await user.click(nextPageButton)

        expect(onPageChangeCallback).toHaveBeenCalledWith(1)
    })
    it('should be able to navigate to the previous page', async () => {
        const wrapper = render(
            <Pagination
                pageIndex={3}
                totalCount={205}
                perPage={10}
                onPageChange={onPageChangeCallback}
            />,
        )

        const nextPageButton = wrapper.getByRole('button', {
            name: 'Página anterior',
        })

        const user = userEvent.setup()

        await user.click(nextPageButton)

        console.log(onPageChangeCallback)

        expect(onPageChangeCallback).toHaveBeenCalledWith(2)
    })
    it('should be able to navigate to the last page', async () => {
        const wrapper = render(
            <Pagination
                pageIndex={7}
                totalCount={205}
                perPage={10}
                onPageChange={onPageChangeCallback}
            />,
        )

        const nextPageButton = wrapper.getByRole('button', {
            name: 'Ultima página',
        })

        const user = userEvent.setup()

        await user.click(nextPageButton)

        expect(onPageChangeCallback).toHaveBeenCalledWith(20)
    })
    it('should be able to navigate to the first page', async () => {
        const wrapper = render(
            <Pagination
                pageIndex={7}
                totalCount={205}
                perPage={10}
                onPageChange={onPageChangeCallback}
            />,
        )

        const nextPageButton = wrapper.getByRole('button', {
            name: 'Primeira página',
        })

        const user = userEvent.setup()

        await user.click(nextPageButton)

        expect(onPageChangeCallback).toHaveBeenCalledWith(0)
    })
})
