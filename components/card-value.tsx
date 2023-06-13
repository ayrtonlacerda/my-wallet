import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format, parseISO } from "date-fns";

interface CardValueInterface {
  date?: string;
  //  percentage: number;
  value: number;
  label: string;
  investmentMargin?: "profit" | "loss" | "neutral";
}

const colorMode = {
  neutral: "text-slate-200",
  profit: "text-emerald-400",
  loss: "text-rose-500",
};

export const CardValue = ({
  date,
  // percentage,
  value,
  label,
  investmentMargin = "neutral",
}: CardValueInterface) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{label}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className={`text-2xl font-bold ${colorMode[investmentMargin]}`}>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          currencyDisplay: "narrowSymbol",
        }).format(value)}
      </div>
      {!!date && (
        <p className={`text-xs  text-muted-foreground`}>
          Ultimo em {format(parseISO(date), "dd/mm/yyyy")}
        </p>
      )}
    </CardContent>
  </Card>
);
