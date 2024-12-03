import React from "react";

interface PaymentMethodCardProps {
  name: string;
  price: number;
}

export default function PaymentMethodCard({
  name,
  price,
}: PaymentMethodCardProps) {
  return (
    <div className="w-36 h-16 px-4 py-2 bg-zinc-500 rounded-md flex flex-col items-start justify-center gap-2  cursor-pointer hover:bg-zinc-500/85 ease-in-out duration-200 ">
      <span>{name}</span>
      <i className="text-xs font-medium">
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
      </i>
    </div>
  );
}
