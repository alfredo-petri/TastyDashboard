import { Outlet } from 'react-router'

export const AppLayout = () => {
    return (
        <div className="h-screen w-screen">
            <h1>cabeçalho</h1>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
