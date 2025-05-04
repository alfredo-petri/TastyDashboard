import { HandPlatter } from 'lucide-react'
import { Outlet } from 'react-router'

export const AuthLayout = () => {
    return (
        <div className="grid min-h-screen min-w-screen grid-cols-2">
            <div className="border-foreground/5 bg-muted text-muted-foreground flex h-full min-w-full flex-col justify-between border-r p-10">
                <div className="text-foreground flex items-center gap-3 text-lg">
                    <HandPlatter className="h-6 w-6" />
                    <span className="font-semibold">Tasty DashBoard</span>
                </div>
                <footer className="text-sm">
                    Painel do parceiro &copy; Tasty Dashboard - 2025
                </footer>
            </div>
            <div className="flex flex-col items-center justify-center">
                <Outlet />
            </div>
        </div>
    )
}
