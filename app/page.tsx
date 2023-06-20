"use client";
import { Cell, Pie, PieChart, Sector } from "recharts";
import "./globals.css";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format, parseISO } from "date-fns";
import { GraphBalance } from "@/components/graph-balance";

const data01 = [
  {
    name: "Short",
    value: 400,
  },
  {
    name: "DCA",
    value: 300,
  },
  {
    name: "Holding",
    value: 300,
  },
];

export default function HomePage() {
  return (
    <main className="px-4">
      <div className="flex direction-row justify-between">
        <GraphBalance data={data01} />
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>Balanço Wallets</CardTitle>
            <CardDescription>
              {format(parseISO(new Date().toISOString()), "dd/mm/yyyy")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {data01.map((notification, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span
                  className={`flex h-2 w-2 translate-y-1 rounded-full bg-[#00C49F]`}
                />
                <div className="space-y-1">
                  <p className="text-lg font-medium leading-none">
                    {notification.name}
                  </p>
                  <p className="text-md text-muted-foreground">
                    ${notification.value},00
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
