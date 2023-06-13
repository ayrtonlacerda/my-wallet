"use client";

import { v4 as uuidv4 } from "uuid";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraphProfitOrLoss } from "@/components/graph-profit";
import { AssetsProps, ListAssets } from "@/components/list-assets";
import { CardValue } from "@/components/card-value";

const CRYPTO = {
  operation: "short",
  symbol: "BTC",
  name: "Bitcoin",
  current_value: 26786.25,
  buy_value: 25321.15,
  amount: 2,
  total_current: 52000.36,
  total_buy: 50154.65,
  percentage: 0.86,
  email: "m@example.com",
};

export const assets: AssetsProps[] = [0, 0, 0, 0, 0, 0, 0, 0, 0].map((_) => ({
  ...CRYPTO,
  id: uuidv4(),
}));

interface WalletPage {
  params: {
    walletId: string | number;
  };
}

export default function Wallet({ params }: WalletPage) {
  return (
    <main className="h-screen col-span-4">
      <div>
        <h1 className="mb-4 px-2 text-2xl font-semibold tracking-tight">
          Wallet Shorts
        </h1>
      </div>

      <Tabs defaultValue="list" className="lg:col-span-4">
        <TabsList>
          <TabsTrigger value="list">Lista de Ativos</TabsTrigger>
          <TabsTrigger value="graph">Gráficos</TabsTrigger>
        </TabsList>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mt-4">
          <CardValue
            label="Aportes"
            value={26785.26}
            date={"2023-06-08T19:43:01.449Z"}
          />
          <CardValue
            label="Saldo"
            value={28785.26}
            date={new Date().toISOString()}
            investmentMargin="profit"
          />
          <CardValue
            label="Lucro ou Prejuízo"
            value={2785.26}
            investmentMargin="profit"
          />
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">PNL</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-400">+27%</div>
              <p className="text-xs text-muted-foreground">total</p>
            </CardContent>
          </Card>
        </div>

        <TabsContent value="list">
          <ListAssets assets={assets} />
        </TabsContent>

        <TabsContent value="graph">
          <div className="lg:col-span-2  p-2 mt-6">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Profit or Loss Total</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <GraphProfitOrLoss />
                <CardTitle className="p-6 pm-2">
                  Profit or Loss por ativo
                </CardTitle>
                <GraphProfitOrLoss />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
