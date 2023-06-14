import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useToggle from "@/services/hooks/useToggle";

export interface DialogAddWallet {
  open: boolean;
  toggleOpen: () => void;
}
export const DialogAddWallet = ({ open, toggleOpen }: DialogAddWallet) => {
  return (
    <Dialog open={open} onOpenChange={toggleOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar Wallet</DialogTitle>
          <DialogDescription>
            Digite um nome único para sua wallet.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 ">
          <div className="items-center ">
            <Label htmlFor="name" className="text-right ml-1">
              Nome
            </Label>
            <Input
              id="name"
              value=""
              placeholder="ex: Shorts"
              className="col-span-3 mt-1"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={toggleOpen}>Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
