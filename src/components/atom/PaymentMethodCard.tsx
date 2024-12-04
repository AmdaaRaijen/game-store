import { useOrderContext } from "@/context/OrderContext";
import React from "react";

interface PaymentMethodCardProps {
  name: string;
  price: number;
}

export default function PaymentMethodCard({
  name,
  price,
}: PaymentMethodCardProps) {
  const { setPayment, payment } = useOrderContext();

  const handleSetPayment = () => {
    setPayment({
      code: name,
      name: name,
    });
  };

  return (
    <button
      onClick={() => handleSetPayment()}
      className={`w-36 h-16 px-4 py-2  rounded-md flex flex-col items-start justify-center gap-2  cursor-pointer ease-in-out duration-200
        ${
          payment?.code === name
            ? "bg-zinc-600 ring-2 ring-zinc-600"
            : "bg-zinc-500 "
        }
        `}
    >
      <span>{name}</span>
      <i className="text-xs font-medium">
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
      </i>
    </button>
  );
}
