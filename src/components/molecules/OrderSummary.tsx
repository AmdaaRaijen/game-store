"use client";

import Image from "next/image";
import React from "react";
import Button from "../atom/Button";
import { useOrderContext } from "@/context/OrderContext";
import NumberFlow from "@number-flow/react";

export default function OrderSummary() {
  const { product } = useOrderContext();

  return (
    <>
      {product ? (
        <div>
          <div className=" bg-zinc-50 rounded-md p-5 border border-dashed border-zinc-500 shadow mb-3">
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
                <p className="font-medium">{product.game}</p>
                <p>{product.name}</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-medium">Total pembayaran</p>
              <div>
                <span>Rp. </span>
                <NumberFlow
                  value={product.price.basic}
                  format={{
                    style: "decimal",
                  }}
                />
              </div>
            </div>
          </div>
          <Button />
        </div>
      ) : (
        <div className=" bg-zinc-100 rounded-md p-5 border border-dashed border-zinc-500 shadow flex items-center justify-center">
          <p>
            Belum ada item yang dipilih. Silahkan pilih item terlebih dahulu.
          </p>
        </div>
      )}
    </>
  );
}
