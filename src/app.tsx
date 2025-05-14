import './index.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router'

import { ThemeProvider } from './components/theme/theme-provider'
import { Toaster } from './components/ui/sonner'
import { queryClient } from './lib/react-query'
import { router } from './routes'

export function App() {
    return (
        <div className="flex h-screen items-center justify-center">
            <ThemeProvider
                defaultTheme="dark"
                storageKey="tasty-dashboard-theme"
            >
                <Toaster richColors />
                <QueryClientProvider client={queryClient}>
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </ThemeProvider>
        </div>
    )
}
