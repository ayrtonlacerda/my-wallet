import { BellRing, ChevronRight, Gem, Home, Wallet } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./input";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export type WalletType = {
  id: string;
  name: string;
};

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  wallets: WalletType[];
  toggleThemeMode: () => void;
  themeMode: "dark" | "light";
  onAddWallet: () => void;
}

export function Sidebar({
  className,
  wallets,
  toggleThemeMode,
  themeMode,
  onAddWallet,
}: SidebarProps) {
  const pathname = usePathname();
  return (
    <div className={cn("pb-12 p2-6", className)}>
      <div className="flex h-screen justify-between flex-col py-4 pl-4 ">
        <div className="space-y-2 py-4 pr-4">
          <div className="py-2 text-center">
            <Link href="/">
              <h2 className="ml-2 mb-4 text-2xl font-semibold tracking-tight flex direction-row align-center  leading-5">
                <Gem className="mr-2" />
                Black Diamond
              </h2>
            </Link>
            <Separator className="mt-2 mb-5" />

            <p className="text-center w-full  text-xl  font-bold">$22,875.00</p>
            <p className={`text-center w-full text-xs  text-muted-foreground`}>
              total
            </p>
            {/* <div className="space-y-1">
              <Link href="/">
                <Button
                  variant={pathname === "/" ? "secondary" : "ghost"}
                  size="sm"
                  className="w-full justify-start"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Button>
              </Link>
            </div> */}
          </div>
          <div className="">
            <h2 className="relative ml-1 text-xl font-semibold tracking-tight">
              Wallets
            </h2>
            <ScrollArea className="h-[300px] ">
              <div className="space-y-1 py-2">
                {wallets?.map((wallet, i) => (
                  <Link href={`/wallet/${wallet.id}`} key={`${wallet.id}-${i}`}>
                    <Button
                      variant={
                        pathname === `/wallet/${wallet.id}`
                          ? "secondary"
                          : "ghost"
                      }
                      size="sm"
                      className="w-full justify-start font-normal"
                    >
                      <Wallet className="h-4 w-4 mr-1" />
                      {wallet.name}
                    </Button>
                  </Link>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={onAddWallet}
              >
                Adicionar Wallet
              </Button>
            </ScrollArea>
          </div>
        </div>
        {/*     <div className="flex  align-center  p-4 pl-6">
          <p className="pr-2 mb-2">{themeMode} mode</p>{" "}
          <Switch
            className="mt-1.5"
            checked={themeMode === "dark"}
            onCheckedChange={toggleThemeMode}
          />
        </div> */}
        <div className="flex pr-4">
          <div className="flex items-center space-x-4 rounded-md border p-4 w-full">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">Ayrton Lacerda</p>
              <p className="text-sm text-muted-foreground">
                ayrton@lacerda.com
              </p>
            </div>
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
}
