"use client";

import React, { useRef, useState } from "react";
import ItemCard from "../atom/ItemCard";
import {
  paymentMethodItems,
  paymentMethodPreview,
  items,
} from "@/data/tempData";
import PaymentMethodContainer from "../molecules/PaymentMethodContainer";
import Input from "../atom/Input";

export default function ProductItems() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const paymentRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (itemKey: number) => {
    setSelectedItem(itemKey);

    if (paymentRef.current) {
      const rect = paymentRef.current.getBoundingClientRect();

      const isNotInViewport = rect.bottom - 35 > window.innerHeight;

      if (isNotInViewport) {
        const elementPosition = rect.top;
        const offsetPosition =
          elementPosition +
          window.scrollY -
          window.innerHeight +
          paymentRef.current.offsetHeight +
          32;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="w-full min-h-fit bg-zinc-200 rounded-md p-5 border border-zinc-500 shadow flex flex-col gap-5">
      <section>
        <h2 className="font-medium mb-2">1. Masukkan Data Akun</h2>
        <div className="flex items-center justify-start gap-5 text-sm">
          <Input label="ID" placeholder="Masukkan ID" type="text" />
          <Input label="Server" placeholder="Masukkan Server" type="text" />
        </div>
      </section>
      <section>
        <h2 className="font-medium mb-2">2. Pilih Nominal</h2>
        <div className="grid grid-cols-3 gap-2">
          {items.map((item) => (
            <ItemCard
              key={item.key}
              handleCardClick={handleCardClick}
              selectedItemKey={selectedItem}
              item={item}
            />
          ))}
        </div>
      </section>
      <section>
        <h2 className="font-medium mb-2">3. Pilih Pembayaran</h2>
        <PaymentMethodContainer
          type="E Wallet"
          ref={paymentRef}
          paymentMethodItems={paymentMethodItems}
          paymentMethodPreview={paymentMethodPreview}
        />
      </section>
    </div>
  );
}
