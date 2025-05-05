import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignUpForm } from '@/schemas/sign-in/sign-up-form-schema'
import { successActionButtonStyle } from '@/styles/components/custom-sonner-styles'

export const SignUp = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<SignUpForm>()

    const handleSignUp = async (data: SignUpForm) => {
        console.log(data)
        try {
            toast.success('Parceiro cadastrado com sucesso', {
                action: {
                    label: 'acessar painel',
                    onClick: () => {
                        navigate('/sign-in')
                    },
                },
                actionButtonStyle: successActionButtonStyle,
            })
            await new Promise((resolve) => setTimeout(resolve, 2000))
        } catch (error) {
            toast.error('Erro ao cadastrar parceiro')
        }
    }

    return (
        <div className="p-8">
            <Button
                asChild
                variant={'ghost'}
                className="text-md absolute top-8 right-8 transition-colors duration-700"
            >
                <Link to="/sign-in">Fazer login</Link>
            </Button>
            <div className="flex w-[350px] flex-col justify-center gap-6">
                <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Criar conta grátis
                    </h1>
                    <p className="text-muted-foreground text-sm">
                        Seja um parceiro e comece a vender pelo Tasty Dashboard
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit(handleSignUp)}
                    className="space-y-4"
                >
                    <div className="space-y-2">
                        <Label htmlFor="restaurantName">
                            Nome do estabelecimento:
                        </Label>
                        <Input
                            id="restaurantName"
                            type="text"
                            {...register('restaurantName')}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="managerName">Seu nome:</Label>
                        <Input
                            id="managerName"
                            type="text"
                            {...register('managerName')}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Seu celular:</Label>
                        <Input id="phone" type="tel" {...register('phone')} />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Seu email:</Label>
                        <Input id="email" type="email" {...register('email')} />
                    </div>
                    <Button
                        disabled={isSubmitting}
                        className="w-full"
                        type="submit"
                    >
                        Finalizar Cadastro
                    </Button>
                    <p className="text-muted-foreground px-6 text-center text-sm leading-relaxed">
                        Ao se cadastrar, você concorda com nossos{' '}
                        <a href="#" className="underline underline-offset-4">
                            Termos de Serviço
                        </a>{' '}
                        e{' '}
                        <a href="#" className="underline underline-offset-4">
                            Política de Privacidade
                        </a>
                        .
                    </p>
                </form>
            </div>
        </div>
    )
}
