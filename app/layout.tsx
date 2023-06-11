"use client";
import { Sidebar } from "@/components/ui/side-bar";
import "./globals.css";
import { Inter } from "next/font/google";
import { useThemeActions, useThemeMode } from "@/store/theme";

const WALLETS_MOCK = [
  {
    id: "7ca93b7d-262e-4088-be49-9463d5ce4281",
    name: "Shorts",
  },
  {
    id: "d2e8c351-cc93-4d85-b4f1-771cde257587",
    name: "DCA",
  },
  {
    id: "1caeb159-18a2-49fa-85cb-2a952f32bc0c",
    name: "Holding",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toggleThemeMode } = useThemeActions();
  const themeMode = useThemeMode();

  return (
    <html lang="en" className={themeMode || "dark"}>
      <div className="h-screen grid lg:grid-cols-5">
        <Sidebar
          className="hidden lg:block h-screen"
          wallets={WALLETS_MOCK}
          themeMode={themeMode}
          toggleThemeMode={toggleThemeMode}
        />
        <div className="p-8 lg:col-span-4">{children}</div>
      </div>
    </html>
  );
}
