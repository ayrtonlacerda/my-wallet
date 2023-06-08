import Image from "next/image";
import { Button } from "@/components/ui/button";
import "./globals.css";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Sidebar } from "@/components/ui/side-bar";

export default function HomePage() {
  return (
    <main className="px-4 py-2">
      <div className="px-4 py-2">
        <h1 className="underline">Hello, Home page!</h1>
      </div>
    </main>
  );
}
