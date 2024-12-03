"use client";

import Image from "next/image";
import React, { RefObject, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PaymentMethodCard from "../atom/PaymentMethodCard";
import { useOrderContext } from "@/context/OrderContext";

interface PaymentMethodCardProps {
  ref: RefObject<HTMLDivElement>;
  type: string;
  paymentMethodItems: Array<{
    name: string;
    amount: number;
  }>;
  paymentMethodPreview: Array<{
    name: string;
    icon: string;
  }>;
}

export default function PaymentMethodContainer({
  ref,
  type,
  paymentMethodItems,
  paymentMethodPreview,
}: PaymentMethodCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { orderState } = useOrderContext();

  return (
    <div className="flex items-center justify-start gap-5 text-sm" ref={ref}>
      <div className="w-full">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full rounded-t-md text-card-foreground disabled:opacity-75 bg-zinc-300 p-2 text-start flex items-center justify-between"
        >
          {type}
          <ExpandMoreIcon
            className={`text-zinc-600 transform transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 transform ${
            isExpanded ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="w-full p-4 bg-zinc-400 grid grid-cols-4 gap-4 text-zinc-50">
            {paymentMethodItems.map((item, idx) => (
              <PaymentMethodCard
                key={idx}
                name={item.name}
                price={orderState ? orderState.price.basic : 0}
              />
            ))}
          </div>
        </div>
        <div
          className={`w-full rounded-b-md px-4 py-3 bg-zinc-500 transition-all duration-300`}
        >
          <div className="flex justify-end gap-2">
            {paymentMethodPreview.map((item, idx) => (
              <Image
                key={idx}
                src={item.icon}
                alt={item.name}
                className="w-5"
                width={980}
                height={980}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
