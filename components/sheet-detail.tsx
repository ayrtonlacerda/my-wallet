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
import { Separator } from "./ui/separator";
import { format, parseISO } from "date-fns";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const invoices = [
  {
    invoice: "1",
    priceBuy: "$250.00",
    amount: "5",
    total: "$1000.00",
  },
  {
    invoice: "1",
    priceBuy: "$250.00",
    amount: "5",
    total: "$1000.00",
  },
  {
    invoice: "1",
    priceBuy: "$250.00",
    amount: "5",
    total: "$1000.00",
  },
  {
    invoice: "1",
    priceBuy: "$250.00",
    amount: "5",
    total: "$1000.00",
  },
  {
    invoice: "1",
    priceBuy: "$250.00",
    amount: "5",
    total: "$1000.00",
  },
];

export const sheetDetailControl = {
  open: () => action(act.openSheetDetail),
  close: () => action(act.closeSheetDetail),
};

export function SheetDetailAsset() {
  const [open, toggleOpen] = useState(false);

  useActions({
    openSheetDetail: () => toggleOpen(true),
    closeSheetDetail: () => toggleOpen(false),
  });

  return (
    <Sheet open={open} onOpenChange={toggleOpen}>
      {/*  <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger> */}
      <SheetContent
        position="right"
        size="lg"
        onInteractOutside={sheetDetailControl.close}
      >
        <SheetHeader className="flex direction-row justify-center align-center">
          <div className="flex w-[40px]">
            {true ? (
              <Image
                loader={({ src, width, quality }) =>
                  //`https://cryptoicons.org/api/icon/btc/50`
                  `https://coinicons-api.vercel.app/api/icon/btc`
                }
                src="./node_modules/cryptocurrency-icons/svg/color/kmd.svg"
                alt="btc"
                width={30}
                height={30}
                className="rounded-full bg-red-100/[0.3]"
              />
            ) : (
              <Coins width={20} height={20} />
            )}
            <SheetTitle className="pl-2">Bitcoin</SheetTitle>
          </div>
        </SheetHeader>
        <div className="py-4 space-y-3">
          <Card>
            {/* <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
              {/* <CardTitle className="text-sm font-medium">{label}</CardTitle>
            </CardHeader> */}
            <CardContent className=" space-y-0 py-2">
              <div className="flex justify-center align-center space-x-2">
                <div className="flex flex-col items-end pr-2">
                  <div className={`text-xs text-muted-foreground`}>PNL</div>
                  <div className={`text-2xl font-bold text-emerald-400`}>
                    +28%
                  </div>
                </div>

                <Separator orientation="vertical" className="mx-4 h-[40px]" />

                <div className="flex flex-col pl-2">
                  <p className={`text-xs text-muted-foreground`}>
                    profit/loss {`\n\n`}
                  </p>
                  <p className={`text-2xl font-bold text-emerald-400`}>
                    {formatCurrency(874.45)}
                  </p>
                </div>
              </div>

              <p className={`text-md  text-muted-foreground text-center`}>
                0.093 BTC
              </p>
            </CardContent>
          </Card>
          <div className="flex h-8 justify-around items-center space-x-4 text-sm py-8">
            <div className="flex flex-col">
              <p className={`text-xs text-muted-foreground`}>t. compra</p>
              <div className={`text-xl font-bold`}>
                {formatCurrency(874.45)}
              </div>
            </div>

            <Separator orientation="vertical" className="mx-2 h-[30px]" />
            <div className="flex flex-col">
              <p className={`text-xs text-muted-foreground`}>t. atual</p>
              <div className={`text-xl font-bold`}>
                {formatCurrency(874.45)}
              </div>
            </div>

            <Separator orientation="vertical" className="mx-2 h-[30px]" />
            <div className="flex flex-col">
              <p className={`text-xs text-muted-foreground`}>qtd</p>
              <div className={`text-xl font-bold`}>0.457 BTC</div>
            </div>
          </div>

          <Table>
            <TableCaption>A lista de aportes</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead className="text-center">Preço Compra</TableHead>
                <TableHead className="text-center">Quantidade</TableHead>
                <TableHead className="text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium ">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell className="text-center">
                    {invoice.priceBuy}
                  </TableCell>
                  <TableCell className="text-center">
                    {invoice.amount}
                  </TableCell>
                  <TableCell className="text-right">{invoice.total}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <SheetFooter className="pt-2 pl-1">
          <Button
            type="submit"
            variant="ghost"
            onClick={sheetDetailControl.close}
          >
            Fechar
          </Button>
          {/* <Button type="submit">Adicionar</Button> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
