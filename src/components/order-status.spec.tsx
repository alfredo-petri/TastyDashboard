import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { OrderStatus } from './order-status'

describe('Order Status', () => {
    it('should display right text when order status is pending', () => {
        const wrapper = render(<OrderStatus status="pending" />)

        const statusText = wrapper.getByText('Pendente')
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-slate-400')
    })
    it('should display right text when order status is canceled', () => {
        const wrapper = render(<OrderStatus status="canceled" />)

        const statusText = wrapper.getByText('Cancelado')
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-rose-500')
    })
    it('should display right text when order status is processing', () => {
        const wrapper = render(<OrderStatus status="processing" />)

        const statusText = wrapper.getByText('Em preparo')
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-amber-500')
    })
    it('should display right text when order status is delivering', () => {
        const wrapper = render(<OrderStatus status="delivering" />)

        const statusText = wrapper.getByText('A caminho')
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-amber-500')
    })
    it('should display right text when order status is delivered', () => {
        const wrapper = render(<OrderStatus status="delivered" />)

        const statusText = wrapper.getByText('Entregue')
        const badgeElement = wrapper.getByTestId('badge')

        expect(statusText).toBeInTheDocument()
        expect(badgeElement).toHaveClass('bg-emerald-500')
    })
})
