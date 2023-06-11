import {
  Home,
  LayoutGrid,
  Library,
  ListMusic,
  Mic2,
  Music,
  Music2,
  PlayCircle,
  Radio,
  User,
  Wallet,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";

//import { Playlist } from "../data/playlists";

export type WalletType = {
  id: string;
  name: string;
};

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  wallets: WalletType[];
  toggleThemeMode: () => void;
  themeMode: "dark" | "light";
}

export function Sidebar({
  className,
  wallets,
  toggleThemeMode,
  themeMode,
}: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="flex h-screen justify-between flex-col">
        <div className="space-y-4 py-4">
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-lg font-semibold tracking-tight">
              Black Diamond
            </h2>
            <div className="space-y-1">
              <Link href="/">
                <Button
                  variant="secondary"
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
            <h2 className="relative px-6 text-lg font-semibold tracking-tight">
              Wallets
            </h2>
            <ScrollArea className="h-[300px] px-2">
              <div className="space-y-1 p-2">
                {wallets?.map((wallet, i) => (
                  <Link href={`/wallet/${wallet.id}`} key={`${wallet.id}-${i}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start font-normal"
                    >
                      <Wallet className="mr-2 h-4 w-4" />
                      {wallet.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </ScrollArea>{" "}
          </div>
        </div>
        <div className="flex flex-row p-4">
          <p className="pr-2">{themeMode} mode</p>{" "}
          <Switch
            checked={themeMode === "dark"}
            onCheckedChange={(value) => console.log(value)}
          />
        </div>
      </div>
    </div>
  );
}
