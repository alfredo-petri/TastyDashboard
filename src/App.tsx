import './index.css'

import { RouterProvider } from 'react-router'

import { ThemeProvider } from './components/theme/theme-provider'
import { Toaster } from './components/ui/sonner'
import { router } from './routes'

export function App() {
    return (
        <div className="flex h-screen items-center justify-center">
            <ThemeProvider
                defaultTheme="dark"
                storageKey="tasty-dashboard-theme"
            >
                <Toaster richColors />
                <RouterProvider router={router} />
            </ThemeProvider>
        </div>
    )
}
