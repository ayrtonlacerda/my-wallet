import { Home, Wallet } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
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
import { Input } from "./input";

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
    <div className={cn("pb-12", className)}>
      <div className="flex h-screen justify-between flex-col">
        <div className="space-y-4 py-4">
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-2xl font-semibold tracking-tight">
              Black Diamond
            </h2>
            <div className="space-y-1">
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
            </div>
          </div>
          <div className="py-2">
            <h2 className="relative px-6 text-2xl font-semibold tracking-tight">
              Wallets
            </h2>
            <ScrollArea className="h-[300px] px-2">
              <div className="space-y-1 p-2">
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
                      <Wallet className="mr-2 h-4 w-4" />
                      {wallet.name}
                    </Button>
                  </Link>
                ))}
              </div>
              <Button
                variant="outline"
                className="ml-2 w-11/12"
                onClick={onAddWallet}
              >
                Adicionar Wallet
              </Button>
            </ScrollArea>
          </div>
        </div>
        <div className="flex  align-center  p-4 pl-6">
          <p className="pr-2 mb-2">{themeMode} mode</p>{" "}
          <Switch
            className="mt-1.5"
            checked={themeMode === "dark"}
            onCheckedChange={toggleThemeMode}
          />
        </div>
      </div>
    </div>
  );
}
