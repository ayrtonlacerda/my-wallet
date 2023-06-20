import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Label } from "./ui/label";
import { DatePicker } from "./ui/date-picker";
import { Coins } from "lucide-react";
import Image from "next/image";
import { Input } from "./ui/input";
import { formatCurrency } from "@/lib/currency";
import { Button } from "./ui/button"; /*  */
import { action, useActions, act } from "@/services/hooks/useActions";
import useToggle from "@/services/hooks/useToggle";
import { useState } from "react";

export const sheetAddControl = {
  open: () => action(act.openSheetAdd),
  close: () => action(act.closeSheetAdd),
};

export function SheetAddAsset() {
  const [open, toggleOpen] = useState(false);

  useActions({
    openSheetAdd: () => toggleOpen(true),
    closeSheetAdd: () => toggleOpen(false),
  });

  return (
    <Sheet open={open} onOpenChange={toggleOpen}>
      {/*  <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger> */}
      <SheetContent
        position="right"
        size="sm"
        onInteractOutside={sheetAddControl.close}
      >
        <SheetHeader>
          <SheetTitle>Adicionar Ativo</SheetTitle>
          <SheetDescription>
            Selecione o ativo e valor do aporte e clique em salvar.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-3">
          <div className="flex justify-center align-center">
            {true ? (
              <Image
                loader={({ src, width, quality }) =>
                  //`https://cryptoicons.org/api/icon/btc/50`
                  `https://coinicons-api.vercel.app/api/icon/btc`
                }
                src="./node_modules/cryptocurrency-icons/svg/color/kmd.svg"
                alt="btc"
                width={50}
                height={50}
                className="rounded-full"
              />
            ) : (
              <Coins width={50} height={50} />
            )}
          </div>

          <div className="items-center direction-column">
            {/*  <Image
              src="/crypto/btc"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
            /> */}
            <Label htmlFor="name" className="text-right pl-1">
              Ativo
            </Label>
            <Input id="name" value="Bitcoin" className="" />
          </div>
          <div className="items-center direction-column">
            <Label htmlFor="username" className="text-right pl-1">
              Preço do Ativo
            </Label>
            <Input
              id="username"
              value={formatCurrency(26154.15)}
              className="col-span-3"
            />
          </div>
          <div className="items-center direction-column">
            <Label htmlFor="username" className="text-right pl-1">
              Data do aporte
            </Label>
            <DatePicker />
          </div>
          <div className="items-center direction-column">
            <Label htmlFor="username" className="text-right pl-1">
              Valor do aporte
            </Label>
            <Input
              id="username"
              value={formatCurrency(154.15)}
              className="col-span-3"
            />
          </div>
          <div className="items-center direction-column">
            <Label htmlFor="username" className="text-right pl-1">
              Qtd. de ativos
            </Label>
            <Input id="username" value={`0.0154 BTC`} className="col-span-3" />
          </div>
        </div>
        <SheetFooter className="pt-2 pl-1">
          <Button type="submit" variant="ghost" onClick={sheetAddControl.close}>
            Cancelar
          </Button>
          <Button type="submit">Adicionar</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
