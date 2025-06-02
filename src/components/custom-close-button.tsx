import { X } from 'lucide-react'
import React from 'react'

import { Button } from './ui/button'

interface CustomCloseButtonProps {
    onClick: () => void
}

export const CustomCloseButton: React.FC<CustomCloseButtonProps> = ({
    onClick,
}) => {
    return (
        <Button
            onClick={onClick}
            variant="link"
            size="sm"
            className="absolute top-4 right-4"
        >
            <X className="text-muted-foreground h-4 w-4" />
        </Button>
    )
}
