import { useMutation, useQuery } from '@tanstack/react-query'
import { Building, ChevronDown, LogOut } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import { getManagedRestaurant } from '@/api/get-managed-restaurant'
import { getProfile } from '@/api/get-profile'
import { signOut } from '@/api/sign-out'

import { StoreProfileDialog } from './store-profile-dialog'
import { Button } from './ui/button'
import { Dialog, DialogTrigger } from './ui/dialog'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Skeleton } from './ui/skeleton'

interface AccountMenuProps {}

export const AccountMenu: React.FC<AccountMenuProps> = () => {
    const [storeProfileDialogIsOpen, setStoreProfileDialogIsOpen] =
        useState(false)

    const handleStoreProfileDialogClose = () => {
        setStoreProfileDialogIsOpen(false)

        setTimeout(() => {
            document.body.style.pointerEvents = 'auto'
        }, 500)
    }

    const navigate = useNavigate()

    const { data: profile, isLoading: isLoadingProfile } = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
        staleTime: Infinity,
    })

    const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } =
        useQuery({
            queryKey: ['managed-restaurant'],
            queryFn: getManagedRestaurant,
            staleTime: Infinity,
        })

    const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
        mutationFn: signOut,
        onSuccess: () => {
            alert('saiu')
            navigate('/sign-in', { replace: true })
        },
    })

    return (
        <Dialog
            onOpenChange={(open) => {
                setStoreProfileDialogIsOpen(true)
                if (!open) {
                    setTimeout(() => {
                        document.body.style.pointerEvents = 'auto'
                    }, 2500)
                }
            }}
            open={storeProfileDialogIsOpen}
        >
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className="flex items-center gap-2 select-none"
                    >
                        {isLoadingManagedRestaurant ? (
                            <Skeleton className="h-4 w-40" />
                        ) : (
                            managedRestaurant?.name
                        )}
                        <ChevronDown className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="flex flex-col">
                        {isLoadingProfile ? (
                            <div className="space-y-1.5">
                                <Skeleton className="h-4 w-32" />
                                <Skeleton className="h-3 w-40" />
                            </div>
                        ) : (
                            <>
                                <span>{profile?.name}</span>
                                <span className="text-muted-foreground text-xs font-normal">
                                    {profile?.email}
                                </span>
                            </>
                        )}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DialogTrigger asChild>
                        <DropdownMenuItem>
                            <Building className="mr-1 h-4 w-4" />
                            <span>Perfil do estabelecimento</span>
                        </DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem
                        asChild
                        disabled={isSigningOut}
                        className="w-full text-rose-500 dark:text-rose-400"
                    >
                        <button onClick={() => signOutFn()}>
                            <LogOut className="mr-1 h-4 w-4" />
                            <span>Sair</span>
                        </button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <StoreProfileDialog
                onCloseStoreProfileDialog={handleStoreProfileDialogClose}
            />
        </Dialog>
    )
}
