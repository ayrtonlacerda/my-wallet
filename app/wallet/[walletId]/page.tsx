interface WalletPage {
  params: {
    walletId: string | number;
  };
}
export default function Wallet({ params }: WalletPage) {
  return <h1 className="underline">wallet: {params.walletId}</h1>;
}
