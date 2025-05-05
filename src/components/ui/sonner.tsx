import { useTheme } from 'next-themes'
import { Toaster as Sonner, ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = 'system' } = useTheme()

    return (
        <Sonner
            theme={theme as ToasterProps['theme']}
            className="toaster group"
            style={
                {
                    '--normal-bg': 'var(--popover)',
                    '--success-bg': 'var(--popover)',
                    '--error-bg': 'var(--popover)',
                    '--normal-text': 'var(--popover-foreground)',
                    '--success-text': 'var(--chart-2)',
                    '--error-text': 'var(--destructive)',
                    '--normal-border': 'var(--border)',
                    '--success-border': 'var(--chart-2)',
                    '--error-border': 'var(--destructive)',
                } as React.CSSProperties
            }
            {...props}
        />
    )
}

export { Toaster }
