import React from 'react'

import { Button } from './ui/button'
import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

interface StoreProfileDialogProps {}

export const StoreProfileDialog: React.FC<StoreProfileDialogProps> = () => {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Perfil do restaurante</DialogTitle>
                <DialogDescription>
                    Atualize as informações do seu estabelecimento
                </DialogDescription>
            </DialogHeader>
            <form action="">
                <div className="gap-4 py-4">
                    <div className="gris-cols-4 grid items-center gap-4">
                        <Label className="text-right" htmlFor="name">
                            Nome
                        </Label>
                        <Input className="col-span-3" id="name" />
                    </div>
                </div>
                <div className="gap-4 py-4">
                    <div className="gris-cols-4 grid items-center gap-4">
                        <Label className="text-right" htmlFor="description">
                            Descrição
                        </Label>
                        <Textarea className="col-span-3" id="description" />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="ghost" type="button">
                        Cancelar
                    </Button>
                    <Button type="submit" variant="success">
                        Salvar
                    </Button>
                </DialogFooter>
            </form>
        </DialogContent>
    )
}
