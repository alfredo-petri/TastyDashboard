import { useForm } from 'react-hook-form'
import { Link } from 'react-router'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignInForm } from '@/schemas/sign-in/sign-in-form-schema'

export const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SignInForm>()

    const handleSignIn = async (data: SignInForm) => {
        console.log(data)

        try {
            toast.success('Enviamos um link de autenticação para o seu e-mail')
            await new Promise((resolve) => setTimeout(resolve, 2000))
        } catch (error) {
            toast.error('Erro ao efetuar o login')
        }
    }

    return (
        <div className="p-8">
            <Button
                asChild
                variant={'ghost'}
                className="text-md hover:text-foreground absolute top-8 right-8 text-teal-600 transition-colors duration-700 hover:bg-teal-200"
            >
                <Link to="/sign-up">Seja um parceiro</Link>
            </Button>
            <div className="flex w-[350px] flex-col justify-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Acessar painel
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        Acompanhe suas vendas pelo painel do parceiro
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit(handleSignIn)}
                    className="space-y-4"
                >
                    <div className="space-y-2">
                        <Label htmlFor="email">Seu email:</Label>
                        <Input id="email" type="email" {...register('email')} />
                    </div>
                    <Button
                        disabled={isSubmitting}
                        className="w-full"
                        type="submit"
                    >
                        Acessar painel
                    </Button>
                </form>
            </div>
        </div>
    )
}
