import Image from "next/image";
import React from "react";

interface ItemCardProps {
  item: {
    key: number;
    name: string;
    price: string;
    icon: string;
  };
  selectedItemKey: number | null;
  handleCardClick: (itemKey: number) => void;
}

export default function ItemCard({
  item,
  selectedItemKey,
  handleCardClick,
}: ItemCardProps) {
  return (
    <div
      key={item.key}
      className={`w-fit relative flex cursor-pointer rounded-md border border-zinc-300  shadow-sm outline-none md:p-4 bg-zinc-100
  ${
    item.key === selectedItemKey
      ? "shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition-shadow duration-50"
      : "border-zinc-300 shadow-none transition-shadow duration-50"
  }`}
      role="radio"
      aria-checked="false"
      tabIndex={0}
      onClick={() => handleCardClick(item.key)}
    >
      <span className="flex flex-1 mr-4">
        <span className="flex flex-col justify-between">
          <span className="block text-xs font-semibold">{item.name}</span>
          <div>
            <span className="mt-1 flex items-center text-[11px] font-semibold">
              {item.price}
            </span>
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
          src={item.icon}
          style={{ color: "transparent" }}
        />
      </div>
    </div>
  );
}
