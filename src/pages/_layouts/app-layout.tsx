import { Outlet } from 'react-router'

import { DashBoardHeader } from '@/components/header/header'

export const AppLayout = () => {
    return (
        <div className="flex min-h-screen flex-col antialiased">
            <DashBoardHeader />
            <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
                <Outlet />
            </div>
        </div>
    )
}
