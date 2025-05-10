import { createBrowserRouter } from 'react-router'

import { AppLayout } from './pages/_layouts/app-layout'
import { AuthLayout } from './pages/_layouts/auth-layout'
import { PageNotFound } from './pages/404'
import { Dashboard } from './pages/app/dashboard/dashboard'
import { Orders } from './pages/app/orders/orders'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <PageNotFound />,
        children: [
            { path: '/', element: <Dashboard /> },
            {
                path: '/orders',
                element: <Orders />,
            },
        ],
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            { path: '/sign-in', element: <SignIn /> },
            { path: '/sign-up', element: <SignUp /> },
        ],
    },
])
