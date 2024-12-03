import { ProductDataType } from "@/types/Product";
import Image from "next/image";
import React from "react";

interface ItemCardProps {
  item: ProductDataType;
  selectedItemKey: string | undefined;
  handleCardClick: (orderItem: ProductDataType) => void;
}

export default function ItemCard({
  item,
  selectedItemKey,
  handleCardClick,
}: ItemCardProps) {
  return (
    <div
      key={item.code}
      className={`w-full relative flex cursor-pointer rounded-md border border-zinc-300  outline-none md:p-4 bg-zinc-100 hover:ring-2 hover:ring-zinc-400/75
        ${item.status === "empty" ? "hidden" : ""}
  ${
    item.code === selectedItemKey
      ? "shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-shadow duration-50 ring-2 ring-zinc-400/75 bg-zinc-50"
      : "border-zinc-300 shadow-none transition-shadow duration-50 ring-0"
  }`}
      role="radio"
      aria-checked="false"
      tabIndex={0}
      onClick={() => {
        handleCardClick(item);
      }}
    >
      <span className="flex flex-1 mr-4">
        <span className="flex flex-col justify-between gap-1">
          <span className="block text-[11px] font-semibold">{item.name}</span>
          <div>
            <i className="mt-1 flex items-center text-[11px] font-medium text-zinc-500">
              {item.price.basic.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </i>
          </div>
        </span>
      </span>
      <div className="flex aspect-square w-8 items-center">
        <Image
          alt="Mobile Legends - Weekly Diamond Pass"
          fetchPriority="high"
          width="300"
          height="300"
          decoding="async"
          data-nimg="1"
          className="object-contain object-right"
          sizes="80vh"
          src="/icon/diamond.webp"
          style={{ color: "transparent" }}
        />
      </div>
    </div>
  );
}
