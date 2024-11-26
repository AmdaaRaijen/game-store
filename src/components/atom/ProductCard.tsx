import Link from "next/link";
import React from "react";

interface ProductCardProps {
  title: string;
  url: string;
  image: string;
}

export default function ProductCard({ title, url, image }: ProductCardProps) {
  return (
    <Link
      href={`/${url}`}
      className="relative w-full md:min-w-60 md:w-full h-36 md:h-64 overflow-hidden rounded-lg group game-card shadow-inner shadow-zinc-500 "
    >
      <div
        className="absolute inset-0 bg-cover md:bg-cover bg-no-repeat bg-center transition-transform duration-300 ease-in-out scale-105 group-hover:scale-100 -z-10 "
        style={{
          backgroundImage: `url("/${image}")`,
        }}
      ></div>
      <div className="absolute inset-0 bg-zinc-500 opacity-15" />
      <div className="absolute bottom-0 left-0 right-0 px-1 py-2 bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm">
        <h3 className="text-white text-[11px] md:text-xl font-normal truncate">
          {title}
        </h3>
      </div>
    </Link>
  );
}
