import './index.css'

import { RouterProvider } from 'react-router'

import { Toaster } from './components/ui/sonner'
import { router } from './routes'

export function App() {
    return (
        <div className="flex h-screen items-center justify-center">
            <Toaster richColors />
            <RouterProvider router={router} />
        </div>
    )
}
