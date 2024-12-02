import Image from "next/image";
import React from "react";
import Button from "../atom/Button";

export default function OrderSummary() {
  return (
    <>
      <div className=" bg-zinc-50 rounded-md p-5 border border-dashed border-zinc-500 shadow">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 overflow-hidden rounded-md">
            <Image
              src="/xavier.jpg"
              alt="Logo Mobile Legends"
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-medium">Mobile Legends</p>
            <p>15 Diamonds (15 + 0 Bonus)</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-medium">Total pembayaran</p>
          <p>Rp 4.379,00</p>
        </div>
      </div>
      <Button />
    </>
  );
}
