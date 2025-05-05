import React from 'react'
import { Link, LinkProps, useLocation } from 'react-router'

interface NavLinkProps extends LinkProps {}

export const NavLink: React.FC<NavLinkProps> = ({ ...props }) => {
    const { pathname } = useLocation()

    return (
        <Link
            data-current={pathname === props.to}
            className="text-muted-foreground hover:text-foreground data-[current=true]:text-foreground flex items-center gap-1.5 text-sm font-medium"
            {...props}
        ></Link>
    )
}
