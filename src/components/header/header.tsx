import { HandPlatter, Home, UtensilsCrossed } from 'lucide-react'
import React from 'react'

import { AccountMenu } from '../account-menu'
import { ThemeToggle } from '../theme/theme-toggle'
import { Separator } from '../ui/separator'
import { NavLink } from './nav-link'

export const DashBoardHeader: React.FC = () => {
    return (
        <div className="min-w-screen border-b">
            <div className="flex h-16 items-center gap-6 px-8">
                <HandPlatter className="h-6 w-6" />
                <Separator orientation="vertical" className="h-6" />
                <nav className="lg: flex items-center space-x-6 lg:space-x-8">
                    <NavLink to={'/'}>
                        <Home className="h-4 w-4" />
                        Dashboard
                    </NavLink>
                    <NavLink to={'/orders'}>
                        <UtensilsCrossed className="h-4 w-4" />
                        Pedidos
                    </NavLink>
                </nav>
                <div className="ml-auto flex items-center gap-2">
                    <AccountMenu />
                    <ThemeToggle />
                </div>
            </div>
        </div>
    )
}
