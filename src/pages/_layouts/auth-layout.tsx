import { Outlet } from 'react-router'

export const AuthLayout = () => {
    return (
        <div className="h-screen w-screen">
            <h1>autenticação</h1>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
